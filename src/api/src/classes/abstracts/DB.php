<?php
/**
 * MapSource website
 *
 * PHP Version 7.3
 *
 * @link     https://github.com/I-E-M-O/website
 * @author   Alessandro Gubitosi <gubi.ale@iod.io>
 * @version	 1.00 07/04/2016
 */

namespace MapSource\Abstracts;

/**
 * Common string functions
 */
require_once(API_DIR . "vendor/autoload.php");
require_once(TRAITS_DIR . "string_functions.php");
require_once(CLASSES_DIR . "Exceptions.php");
require_once(INTERFACES_DIR . "DBRules.php");

use MapSource\string_functions as string_functions;
use MapSource\Exceptions as Exceptions;
use MapSource\DBRules as DBRules;
use Michelf\Markdown;
use Michelf\MarkdownExtra;

/**
 * DB Abstract class
 *
 * This class implements DBRules methods and define the base to manage the database
 *
 * The class features the following methods:
 * 	@link        connect()
 * 	@link        getConnectionData()
 * 	@link        recurse()
 * 	@link        errorCode()
 * 	@link        prepare()
 * 	@link        execute()
 * 	@link        getTableStructure()
 * 	@link        check()
 * 	@link        ask()
 * 	@link        insert()
 */
abstract class DB implements DBRules {
    use string_functions;

    protected static $db;

    /**
    * Instantiate class.
    *
    * @access public
    *
    * @uses connect()
    */
    public function __construct() {
        self::connect();
    }

    /**
     * Connect to the database
     * @return object                                       The connection session
     */
    public static function connect() {
        $config = self::getConnectionData();
        self::$db = new \PDO(
            "mysql:host=" . $config->database->host . ";dbname=" . $config->database->dbname,
            $config->database->username,
            $config->database->password,
            array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
        );
        return self::$db;
    }

    /**
     * Fetch data from the database config file
     * @return object                                       The connection data
     */
    private static function getConnectionData() {
        return string_functions::array_to_object(yaml_parse_file(YML_DIR . "db.yml"));
    }

    /**
     * Recurse the queries if there's a column ending with "__id"
     * @param  array            $results                    The array of results to recurse
     * @return array                                        The data tree
     */
    public static function recurse($results, $show_ids = false) {
        if(!is_null($results) && !empty($results) && is_array($results)) {
            $results = string_functions::obj_to_array($results);
            foreach($results as $k => $v) {
                foreach($v as $col => $val) {
                    if(is_array($val)) {
                        foreach($val as $kval => $vval) {
                            if(is_array($vval)) {
                                foreach($vval as $vcol => $vvval) {
                                    $subsubquery = array();
                                    if(substr($vcol, -4) == "__id" && !is_null($vvval)) {
                                        $subsubquery = DB::recurse(DB::ask("*", substr($vcol, 0, -4), "`id` = {$vvval}"), $show_ids);
                                        if(!$show_ids) {
                                            unset($subsubquery[$k]["id"]);
                                        }
                                        $results[$k][$col][$kval][substr($vcol, 0, -4)] = ((count($subsubquery) === 1 && string_functions::has_subarray($subsubquery)) ? $subsubquery[0] : $subsubquery);

                                        if(!$show_ids) {
                                            unset($results["id"]);
                                            unset($results[$k]["id"]);
                                        }
                                        unset($results[$k]["password"]);
                                        unset($results[$k][$col][$kval][$vcol]);
                                    }
                                }
                            }
                        }
                    } else {
                        $subquery = array();
                        if(substr($col, -4) == "__id" && !is_null($val)) {
                            $subquery = DB::recurse(DB::ask("*", substr($col, 0, -4), "`id` = {$val}"), $show_ids);
                            $subquery = (count($subquery) == 1) ? $subquery[0] : $subquery;
                            // print "\n";
                            if(!$show_ids) {
                                unset($subquery["id"]);
                                unset($subquery[$k]["id"]);
                            }
                            // print_r($subquery) . "\n";
                            $results[$k][substr($col, 0, -4)] = ((count($subquery) === 1 && string_functions::has_subarray($subquery)) ? $subquery[0] : $subquery);

                            if(!$show_ids) {
                                unset($results["id"]);
                                unset($results[$k]["id"]);
                            }
                            unset($results[$k]["password"]);
                            unset($results[$k][$col]);
                        }
                    }
                }
            }
            return $results;
        } else {
            return $results;
        }
    }

    /**
     * The PDO errorCode() method
     */
    public static function errorCode() { return DB::$db->errorCode(); }

    /**
     * The PDO prepare() method
     * @param  string           $query                      The query to prepare
     */
    public static function prepare($query) { return DB::$db->prepare($query); }

    /**
     * The PDO execute() method
     */
    public static function execute() { return DB::$db->execute(); }

    public static function getLastID($table) {
        $query = DB::$db->query("select `AUTO_INCREMENT` from information_schema.`TABLES` where `TABLE_NAME` = '{$table}'");
        if($query->rowCount()) {
            while($row = $query->fetch(\PDO::FETCH_ASSOC)) {
                return $row["AUTO_INCREMENT"];
            }
        }
    }

    /**
     * Get the MySQL table structure
     * @param  string           $table                      Tha table name
     * @return array                                        An array with the table structure
     */
    public static function getTableStructure($table) {
        $q = "select * from INFORMATION_SCHEMA.COLUMNS where `table_name` = '{$table}'";
        $query = DB::$db->query($q);
        if($query->rowCount() == 0) {
            return null;
        } else {
            while($row = $query->fetch(\PDO::FETCH_ASSOC)) {
                $r[] = $row;
            }
            return array($table => $r);
        }
    }

    /**
     * Check if a builded query is valid
     * @param  string           $query                      The query to check
     * @return bool
     */
    public static function check($query) {
        if(isset($query)) {
            $query = DB::$db->query($query);
            return ($query->rowCount() === 0) ? false : true;
        } else {
            Exceptions::run("No query provided");
        }
    }

    /**
     * Ask data to database
     * @param  string           $column                     The target column
     * @param  string           $table                      The target database table
     * @param  string           $where                      A custom filter
     * @param  string           $group                      Group by ...
     * @param  string           $subquery                   A subquery to execute
     * @return array                                        An array of query results
     */
    public static function ask($column = "", $table = "", $where = "", $group = null, $subquery = "") {
        if(isset($column)) {
            $tbl = array();
            if(is_array($column)) {
                foreach($column as $key => $value) {
                    if(substr($value, 0, 4) == "sum(" || substr($value, 0, 6) == "count(") {
                        $tbl[] = trim($value);
                    } else {
                        $tbl[] = "`" . trim($value) . "`";
                    }
                }
                $tables = implode(", ", $tbl);
            } else {
                if(trim($column) == "*") {
                    $tables = "*";
                } else if(strpos($column, ",") === false) {
                    $tables = (strlen($column) > 0) ? "{$column}" : "*";
                } else {
                    $tbl = explode(",", $column);
                    foreach($tbl as $key => $value) {
                        $table[] = "`" . trim($value) . "`";
                    }
                    $tables = implode(", ", $table);
                }
            }
        } else {
            $tables = "*";
        }
            /**
             * Build query
             */
            $q = "select {$tables} from `{$table}`" . ((strlen($where) > 0) ? " where {$where}" : "");
            if(!is_null($group) && strlen($group) > 0) {
                $q .= " group by `{$group}`";
            }
            $q .= ((strlen($subquery) > 0) ? $subquery : "");
            // print $q . "\n";
            // exit();

        $query = DB::$db->query($q);
        if($query->rowCount() == 0) {
            return null;
        } else if($query->rowCount() == 1) {
            $row = $query->fetch(\PDO::FETCH_ASSOC);
            if($table == "MapSource_posts") {
                $row["summary"] = MarkdownExtra::defaultTransform(stripslashes($row["summary"])) . string_functions::readmore($row["id"] . "/" . (($row["link"] !== "") ? $row["link"] : str_replace(" ", "_", $row["title"])));
                $row["content"] = MarkdownExtra::defaultTransform(stripslashes($row["content"]));
                $row["tags"] = array_map(
                    function($tag) {
                        return ucfirst(trim($tag));
                    },
                    explode(",", stripslashes($row["tags"]))
                );
            }
            foreach($row as $k => $v) {
                if(isset($row["association_role"])) {
                    $row["member_of"] = explode(",", $row["association_role"]);
                    unset($row["association_role"]);
                }
                if(isset($row["coords"])) {
                    $q = "select {$tables}, x(`coords`) as lat, y(`coords`) as lng from `{$table}`" . ((strlen($where) > 0) ? " where " . $where . (($column == "bot_keys") ? (($production) ? " and `kind` = 'production'" : " and `kind` = 'test'") : "") : "") . ((strlen($group) > 0) ? " group by `" . $group . "`" : "");
                    $query = DB::$db->query($q);
                    $r = $query->fetch(\PDO::FETCH_OBJ);
                    $row["coords"] = $r->lat . ", " . $r->lng;
                }
                if(isset($row["perms"]) && strpos($row["perms"], ",") !== false) {
                    $permissions = explode(",", $row["perms"]);
                    foreach($permissions as $k => $v) {
                        $q = "select * from `users__role_permissions` where `id` = " . $v;
                        $query = DB::$db->query($q);
                        $r = $query->fetch(\PDO::FETCH_OBJ);
                        $row["permissions"][] = $r;
                        if(empty($row["permissions"]) && empty($row["permissions"][0])) {
                            unset($row["permissions"]);
                        }
                    }
                    unset($row["perms"]);
                } else {
                    $row["permissions"] = array();
                    if(empty($row["permissions"]) && empty($row["permissions"][0])) {
                        unset($row["permissions"]);
                    }
                    unset($row["perms"]);
                }
                // print_r($row);
                // exit();
            }
            if($query->rowCount() == 1) {
                return array($row);
            } else {
                return $row;
            }
        } else {
            $i = -1;
    		while($row = $query->fetch(\PDO::FETCH_ASSOC)) {
                $i++;
                foreach($row as $col => $val) {
                    $rows[$i][$col] = (is_numeric($val) ? intval($val) : $val);
                }
    		}
            return $rows;
        }
    }

    /**
     * Insert data in database
     * @param  string           $table                      The target table
     * @param  array            $columns                    An array with involved columns
     * @param  array            $values                     An array with values related to involved columns
     * @return int                                          The last inserted id
     */
    public static function insert($table, array $columns, array $values) {
        if(!isset($columns)) {
            Exceptions::run(_("No columns provided"));
        }
        if(!isset($values)) {
            Exceptions::run(_("No values provided"));
        }
        if(count($columns) !== count($values)) {
            Exceptions::run(_("Provided values doesn't match columns"));
        }
        // Manage columns
        foreach($columns as $kc => $vc) {
            $cols[] = "`{$vc}`";
        }
        foreach($values as $kv => $vv) {
            if(strpos($vv, "POINT") === 0) {
                $vals[] = $vv;
            } else {
                $vals[] = "'{$vv}'";
            }
        }
        $parsed_columns = implode(",", $cols);
        $parsed_values = implode(",", $vals);
        $query = "insert into {$table} ({$parsed_columns}) values({$parsed_values})";
        // print $query;
        $query = DB::$db->prepare($query);
        $query->execute();
        if($query === false) {
            Exceptions::run(_("There was a problem during the database insert:"), $query);
        }
        return ($query->rowCount() > 0) ? DB::$db->lastInsertId() : Exceptions::run(_("There was a problem during the database insert:"), $query);
    }

    /**
     * Update data in database
     * @param  string           $table                      The target database table
     * @param  array            $array                      An array with key => values to update
     * @param  string           $where                      A custom filter
     * @return bool
     */
    public static function update($table, array $array, $where) {
        if(!isset($table)) {
            Exceptions::run(_("No table provided"));
        }
        if(!isset($array)) {
            Exceptions::run(_("No data provided"));
        }
        if(!isset($where)) {
            Exceptions::run(_("No condition provided"));
        }
        foreach($array as $column => $value) {
            $sets[] = "`{$column}` = '{$value}'";
        }
        $set = implode(", ", $sets);
        $q = "update `{$table}` set {$set} where {$where}";
        // $query = DB::$db->prepare($q);
        $query = DB::$db->exec($q);
        if($query === false) {
            Exceptions::run(_("There was a problem during the database update:"), $query);
        } else {
            return true;
        }
    }

    /**
     * Replace (insert or update) data in database
     * @param  string           $table                      The target database table
     * @param  array            $columns                    An array with involved columns
     * @param  array            $values                     An array with values related to involved columns
     * @return bool
     */
    public static function replace($table, array $columns, array $values) {
        if(!isset($table)) {
            Exceptions::run(_("No table provided"));
        }
        if(!isset($values)) {
            Exceptions::run(_("No values provided"));
        }
        if(count($columns) !== count($values)) {
            print_r($columns);
            print_r($values);
            Exceptions::run(_("Provided values doesn't match columns"));
        }
        // Manage columns
        foreach($columns as $kc => $vc) {
            $cols[] = "`{$vc}`";
        }
        foreach($values as $kv => $vv) {
            if(strpos($vv, "POINT") === 0) {
                $vals[] = $vv;
            } else {
                $vals[] = "'{$vv}'";
            }
        }
        $parsed_columns = implode(",", $cols);
        $parsed_values = implode(",", $vals);
        $q = "replace into `{$table}` ({$parsed_columns}) values({$parsed_values})";
        $query = DB::$db->prepare($q);
        $query->execute();
        if($query === false) {
            Exceptions::run(_("There was a problem during the database replace:"), $query);
        }
        return ($query->rowCount() > 0) ? DB::$db->lastInsertId() : Exceptions::run(_("There was a problem during the database replace:"), $query);
    }

    /**
     * Destroy the connection object so close the connection
     */
    private function __destruct() {
        self::$db = null;
    }
}
DB::connect();
?>
