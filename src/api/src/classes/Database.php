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

namespace MapSource\Database;

require_once(TRAITS_DIR . "string_functions.php");
require_once(ABSTRACT_CLASSES_DIR . "DB.php");
require_once(CLASSES_DIR . "Exceptions.php");

use MapSource\Abstracts;
use MapSource\Abstracts\DB as DB;

/**
 * Database functionalities
 *
 * This class can be used to execute common database jobs
 *
 * The class features the following methods:
 * 	@link        insertLocation()
 * 	@link        insertUser()
 * 	@link        insertNode()
 */
final class Database extends DB {
    /* ---------------------------------------------------------------------- */
    /*                              SELECT                                    */
    /* ---------------------------------------------------------------------- */

    /**
     * Get an user by its credentials
     *
     * @param  string                           $u                              The username
     * @param  string                           $p                              The user password
     * @return object                                                           The user data
     */
    public static function get_user_by_id_pw($u, $p) {
        $user = DB::recurse(DB::ask("*", "allowed_users", "`permission_id` = '{$u}' AND `permission_pass` = '{$p}'"));
        unset($user[0]["permission_pass"]);
        unset($user[0]["creation_date"]);
        unset($user[0]["last_edit"]);
        unset($user[0]["last_login"]);
        unset($user[0]["organizations"]["creation_date"]);
        unset($user[0]["organizations"]["last_edit"]);

        return $user;
    }

    /**
     * Get an user by its username
     *
     * @param  string                           $username                       The username
     * @return object                                                           The user data
     */
    public static function get_user_by_username($username) {
        $user = DB::recurse(DB::ask("*", "allowed_users", "`username` = '{$username}' and `enable` = '1'"));
        unset($user[0]["permission_pass"]);
        unset($user[0]["creation_date"]);
        unset($user[0]["last_edit"]);
        unset($user[0]["last_login"]);
        unset($user[0]["organizations"]["creation_date"]);
        unset($user[0]["organizations"]["last_edit"]);

        return $user;
    }

    /**
     * Get an unactive user by its username
     *
     * @param  string                           $username                       The username
     * @param  object                           $u                              The user data who perform the action
     * @return object                                                           The user data
     */
    public static function get_unactive_user_by_username($u, $username) {
        $user = DB::recurse(DB::ask("*", "registration_requests", "`permission_id` = '{$u}'"));
        unset($user[0]["permission_pass"]);

        return $user;
    }



    /* ---------------------------------------------------------------------- */
    /*                               EDIT                                     */
    /* ---------------------------------------------------------------------- */



    /* ---------------------------------------------------------------------- */
    /*                              INSERT                                    */
    /* ---------------------------------------------------------------------- */

    /**
     * Insert data in the database
     * @param  string           $table                      The target table
     * @param  array            $array                      An array with values
     * @return int                                          The last location insert id
     */
    public static function inserData($table, $array) {
        foreach($array as $column => $value) {
            $columns[] = $column;
            $values[] = (isset($value) ? $value : null);
        }
        $id = DB::insert($table, $columns, $values);
        return $id;
    }

    /**
     * Insert a location in the database
     * @param  array            $array                      An array with values
     * @return int                                          The last location insert id
     */
    public static function insertLocation($array) {
        $location_id = self::inserData("location", $array);
        return $location_id;
    }

    /**
     * Insert an user in the database
     * @param  array            $array                      An array with values
     * @return int                                          The last location insert id
     */
    public static function insertUser($array) {
        $location_id = DB::inserData("users", $array);
        return $location_id;
    }


    /* ---------------------------------------------------------------------- */
    /*                              DELETE                                    */
    /* ---------------------------------------------------------------------- */

}
?>
