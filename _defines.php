<?php
if(!defined("ROOT_DIR")) {
    define("ROOT_DIR", dirname(__FILE__));
}

/**
 * HOST
 */
if(!defined("HOST")) { define("HOST", (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] && $_SERVER["HTTPS"] != "off") ? "https" : "http" . "://" . ((!isset($_SERVER["SERVER_NAME"])) ? php_uname("n") : $_SERVER["SERVER_NAME"]) . "/"); }

/**
 * Root
 */
// chdir(__DIR__ . "/../../");
if(!defined("SYSTEM_ROOT")) { define("SYSTEM_ROOT", dirname(getcwd() . "/")); }
if(!defined("WEB_ROOT")) { define("WEB_ROOT", "../../"); }


/**
 * root:src/
 */
if(!defined("SRC_DIR")) { define("SRC_DIR", ROOT_DIR . "/src/"); }

    /**
     * root:src/api/
     */
    if(!defined("API_DIR")) { define("API_DIR", SRC_DIR . "api/"); }
        /**
         * root:src/api/funcs/
         */
        if(!defined("FUNCS_DIR")) { define("FUNCS_DIR", API_DIR . "funcs/"); }

        /**
         * root:src/api/lib/
         */
        if(!defined("LIB_DIR")) { define("LIB_DIR", API_DIR . "lib/"); }

        /**
         * root:src/api/res/
         */
        if(!defined("RES_DIR")) { define("RES_DIR", API_DIR . "res/"); }

            /**
             * root:src/api/res/yml/
             */
            if(!defined("YML_DIR")) { define("YML_DIR", RES_DIR . "yml/"); }

        /**
         * root:src/api/src/
         */
        if(!defined("SRC2_DIR")) { define("SRC2_DIR", API_DIR . "src/"); }

            /**
             * root:src/api/src/classes/
             */
            if(!defined("CLASSES_DIR")) { define("CLASSES_DIR", SRC2_DIR . "classes/"); }

                /**
                 * root:src/api/src/classes/abstracts/
                 */

                if(!defined("ABSTRACT_CLASSES_DIR")) { define("ABSTRACT_CLASSES_DIR", CLASSES_DIR . "abstracts/"); }


            /**
             * root:src/api/src/interfaces/
             */
            if(!defined("INTERFACES_DIR")) { define("INTERFACES_DIR", SRC2_DIR . "interfaces/"); }

            /**
             * root:src/api/src/traits/
             */
            if(!defined("TRAITS_DIR")) { define("TRAITS_DIR", SRC2_DIR . "traits/"); }

    /**
     * root:src/assets/
     */
    if(!defined("ASSETS_DIR")) { define("ASSETS_DIR", SRC_DIR . "assets/"); }
        /**
         * root:src/assets/dist/
         */
        if(!defined("DIST_DIR")) { define("DIST_DIR", ASSETS_DIR . "dist/"); }
            /**
            * root:src/assets/dist/bower_components/
            */
            if(!defined("BOWER_DIR")) { define("BOWER_DIR", DIST_DIR . "bower_components/"); }
            /**
             * root:src/assets/dist/css/
             */
            if(!defined("CSS_DIR")) { define("CSS_DIR", DIST_DIR . "css/"); }
            /**
             * root:src/assets/dist/css/
             */
            if(!defined("JS_DIR")) { define("JS_DIR", DIST_DIR . "js/"); }
        /**
         * root:src/assets/dist/img/
         */
        if(!defined("IMG_DIR")) { define("IMG_DIR", ASSETS_DIR . "img/"); }
        /**
         * root:src/assets/dist/video/
         */
        if(!defined("VIDEO_DIR")) { define("VIDEO_DIR", ASSETS_DIR . "video/"); }

    /**
     * root:src/templates/
     */
    if(!defined("TEMPLATES_DIR")) { define("TEMPLATES_DIR", SRC_DIR . "templates/"); }
        /**
         * root:src/templates/
         */
        if(!defined("HTML_PARTS_DIR")) { define("HTML_PARTS_DIR", TEMPLATES_DIR . "parts/"); }


define("REQUIRED_FIELD", " <sup>*</sup>");

/* -------------------------------------------------------------------------- */


function web($path) {
    return str_replace(ROOT_DIR . "/", "", $path);
}

/**
 * The main domain
 */
$domain = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] && $_SERVER["HTTPS"] != "off") ? "https" : "http" . "://" . $_SERVER["SERVER_NAME"];

/**
 * A simple bool variable to determine logged users status.
 * Peace of mind :)
 * @var bool                    $logged                 The current user is logged in?
 */
$logged = false;
