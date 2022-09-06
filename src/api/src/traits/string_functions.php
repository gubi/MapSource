<?php

namespace MapSource;

require_once(API_DIR . "vendor/autoload.php");
use Misd\Linkify\Linkify;

trait string_functions {
    /* ----------------------------------------------------------------
    						ARRAY FUNCTIONS
    ---------------------------------------------------------------- */
    /**
     * Check if a key is stored in an array
     * @param  string               $key                The key to check
     * @param  array                $array              The target array
     * @return bool
     */
    public static function array_check($key, $array) {
        return (isset($array[$key]) || array_key_exists($key, $array));
    }

    /**
     * Sort an array or an object by a given sub-key
     * @param  array|object         $array              The array or object to sort
     * @param  string               $subject            The subkect sub-key
     * @return array                                    The sorted array
     */
    public static function order_by_subval($array, $subject) {
        $array = array_values(is_object($array) ? (array)$array : $array);
        foreach($array as $k => $v) {
            $arr[$k] = $v[$subject];
        }
        array_multisort($arr, SORT_ASC, $array);

        return $array;
    }

    /**
     * Group an array by a given sub-value
     * @param  array                $array              The array to group
     * @param  string               $subject            The subkect sub-value
     * @param  bool                 $sort               Sort the result?
     * @return array                                    The grouped array
     */
    public static function group_by_subval($array, $subject, $sort = false) {
        foreach($array as $k => $v){
           $arr[ucfirst($v[$subject])][] = $v;
        }
        if($sort) {
            ksort($arr);
        }
        return $arr;
    }

    /**
     * Determine if an array has a sub-array
     * @param  array                $array              The subject array to evaluate
     * @return boolean
     */
    public static function has_subarray($array) {
        rsort($array);
        return (isset($arr[0]) && is_array($arr[0]));
    }

    /**
     * Convert an object to a recursive array
     * @param  object               $object             The object to convert
     * @return array                                    The converted object
     */
    public static function obj_to_array($object) {
        return array_values(json_decode(json_encode($object), 1));
    }

    /**
     * Convert an object to a recursive array
     * @param  object               $object             The object to convert
     * @return array                                    The converted object
     */
    public static function array_to_object($object) {
        return json_decode(json_encode($object));
    }

    /* ----------------------------------------------------------------
    						STRING FUNCTIONS
    ---------------------------------------------------------------- */

    /**
     * Regex clean of a given variable with specific rules
     * @param  mixed                $data               The variable to clean
     * @param  string               $type               The rule type to apply
     * @return mixed                                    The cleaned variable
     */
    public static function clean($data, $type) {
        switch($type) {
            case "int":
            case "integer":
                $regex = '/[^\d]+/';
                break;
            case "float":
                $regex = '/[^\d\,\.]+/';
                break;
            case "string":
                $regex = '/[^a-zA-Z0-9]+/';
                break;
            case "email":
                $regex = '/[^a-zA-Z0-9\@\_\-]+/';
                break;
        }
        return preg_replace($regex, "", $data);
    }
    /**
     * Check if a string is contained in another string
     * @param  string               $var                The string to check
     * @param  string               $text               The target string
     * @return bool
     */
    public static function contains($var, $text){
        return (preg_match("/\b" . preg_quote($var, "/") . "\b/i", $text) ? true : false);
        // return (stripos(strtolower($text), strtolower($var)) !== false);
    }

    /**
     * Check if a string start with a given substring
     * @param  string               $start              The substring
     * @param  string               $text               The string to check
     * @return bool
     */
    public static function start_with($start, $text) {
        return (substr(trim(strtolower($text)), 0, strlen($start)) === strtolower($var)) ? "true" : "false";
    }

    public static function end_with($haystack, $needle) {
        return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== false);
    }

    /**
     * Validate an email address
     * @param  string               $email              The email to validate
     * @return bool
     */
    public static function validate_email($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match('/@.+\./', $email);
    }

    /**
     * Calculate the sex of an user basing on its first name
     * @return string                                   "o" if male, "a" if female
     */
    public static function genderize() {
        $genderize = $this->curl("https://api.genderize.io/", array("name" => $this->user->first_name));
        return ($genderize->gender == "male") ? "o" : "a";
    }

    /**
     * Hash a given text
     * @param  string               $text               The text to hash
     * @return string                                   The hashed text
     */
    public static function hash($text) {
        return md5(sha1($text));
    }

    /**
     * Make all URL in a string to a clickable links
     * @param string                $text               The text of the link
     */
    // public static function linkify($text) {
    //     $linkify = new Linkify();
    //     return $linkify->process($text);
    // }

    /**
     * Generate "readmore" link
     * @param  string               $link               The url to link
     * @return string                                   The readmore link
     */
    public static function readmore($link) {
    	return '<p class="readmore right"><a href="./Post/' . $link . '">Read more &rsaquo;</a></p>';
    }

    /**
     * Convert a break line to <p> tag
     * @param  string               $string             The text to split
     * @return string                                   The text subdivided by <p> tags
     */
    public static function nl2p($string) {
    	$paragraphs = "";
    	foreach (explode("\n", $string) as $line) {
    		if (trim($line)) {
    			$paragraphs .= '<p>' . $line . '</p>';
    		}
    	}
    	return $paragraphs;
    }

    /**
     * Convert a trièle break line to <section> tag
     * @param  string               $string             The text to split
     * @return string                                   The text subdivided by <section> tags
     */
    public static function nl2section($string) {
    	$paragraphs = "";
    	foreach (explode("\n\n\n", $string) as $line) {
    		if (trim($line)) {
    			$paragraphs .= "<section>" . $line . "</section>";
    		}
    	}
    	return $paragraphs;
    }
}
?>
