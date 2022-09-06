<?php
/**
* MapSource website
*
* PHP Version 7.3
*
* @link  https://github.com/I-E-M-O/website
* @author Alessandro Gubitosi <gubi.ale@iod.io>
*/

namespace MapSource;

interface DBRules {
    /**
     * The PDO connection errorCode()
     */
    public static function errorCode();

    /**
     * The PDO prepare() method
     * @param  string           $query                      The query to prepare
     */
    public static function prepare($query);

    /**
     * The PDO execute() method
     */
    public static function execute();

    /**
     * Get the MySQL table structure
     * @param  string           $table                      Tha table name
     * @return array                                        An array with the table structure
     */
    public static function getTableStructure($table);

    /**
     * Check if a builded query is valid
     * @param  string           $query                      The query to check
     * @return bool
     */
    public static function check($query);

    /**
     * Ask data to database
     * @param  string           $column                     The target column
     * @param  string           $table                      The target database table
     * @param  string           $where                      A custom filter
     * @param  string           $group                      Group by ...
     * @param  string           $subquery                   A subquery to execute
     * @return array                                        An array of query results
     */
    public static function ask($column = "", $table = "", $where = "", $group = "", $subquery = "");

    /**
     * Insert data in database
     * @param  string           $table                      The target table
     * @param  array            $columns                    An array with involved columns
     * @param  array            $values                     An array with values related to involved columns
     * @return bool
     */
    public static function insert($table, array $columns, array $values);
}

?>
