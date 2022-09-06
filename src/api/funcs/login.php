<?php
require_once(CLASSES_DIR . "Database.php");
require_once(TRAITS_DIR . "string_functions.php");
require_once(LIB_DIR . "_blowfish.php");

use MapSource\Database as DB;
use MapSource\string_functions as string_functions;

$domain = $settings->site->domain;
$cookie_domain = $settings->site->cookie_domain;

// function code_name($user) {
// 	$date = date("Ymd", strtotime($user->creation_date));
// 	$name = preg_replace("/[^\w]/", "", $user->organization_name);
// 	// Code name
// 	$code_name = "";
// 	preg_match_all("/\w+[^\s]/", strtoupper($user->name_and_last), $names);
// 	foreach($names as $k => $v) {
// 		$regex = ("/[^b-df-hj-np-tv-z]/i");
// 		$consonants = preg_replace($regex, "", $v);
// 		foreach($consonants as $ck => $cv) {
// 			$code_name .= substr($cv, 0, 3);
// 		}
// 	}
//
// 	return uniqid("{$date}_{$name}-{$code_name}-");
// }

if(isset($_POST["uid"]) && trim($_POST["uid"]) !== "" && isset($_POST["pwd"]) && trim($_POST["pwd"]) !== "") {
	$u = preg_replace("/[^\w+\d+\s\-\_]/", "", $_POST["uid"]);
	$p = sha1(preg_replace("/[\p{Cc}]/", "", $_POST["pwd"]));
	$user_data = string_functions::array_to_object(DB\Database::get_user_by_id_pw($u, $p)[0]);

	if($user_data !== null) {
		$crypted_user = PMA_blowfish_encrypt($user_data->username, $cookie_domain);

		/**
		 * Cookie name:
		 * `iau` = "IEMO Authenticated User"
		 * @var string
		 */
		setcookie("iau", $crypted_user, time() + 7200, "/", ".{$domain}");
		header("location: ./");
	} else {
		print "User not found";
	}
}
if(isset($_COOKIE["iau"])) {
	$decrypted_user = strtoupper(PMA_blowfish_decrypt($_COOKIE["iau"], $cookie_domain));

	$user = string_functions::array_to_object(DB\Database::get_user_by_username($decrypted_user)[0]);
	$user->name_and_last = $user->name . " " . $user->last_name;
	$logged = true;
}
?>
