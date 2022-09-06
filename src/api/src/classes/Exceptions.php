<?php
/**
 * IEMO website
 *
 * PHP Version 7.3
 *
 * @link     https://github.com/I-E-M-O/website
 * @author   Alessandro Gubitosi <gubi.ale@iod.io>
 * @version	1.00 07/04/2016
 */

namespace IEMO;

/**
* Exceptions manager
*
* This class can be used to execute an Exception with a custom message
*
* The class features the following methods:
* 	@link        run()
*/
class Exceptions {
    /**
     * Display an error connection
     * @param  string            $message                   The message to display
     * @param  string            $db_info                   Show also database error info?
     * @return Exception
     */
    public static function run($message, $db_info = null) {
        $error_info = (!is_null($db_info) ? implode(" - ", $db_info->errorInfo()) : "");
        throw new \Exception("\n\n   " . $message . " " . $error_info . "\n   class " . __METHOD__ . "\n\n", 1);
        exit();
    }
}
?>
