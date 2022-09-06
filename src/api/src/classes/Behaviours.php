<?php
/**
 * IEMO
 *
 * PHP Version 5.6.4
 *
 * @link     https://github.com/I-E-M-O/website
 * @author   Alessandro Gubitosi <gubi.ale@iod.io>
 * @version	 1.00 18/12/2020
 */

namespace IEMO;

require_once(TRAITS_DIR . "string_functions.php");
require_once(ABSTRACT_CLASSES_DIR . "DB.php");
require_once(ABSTRACT_CLASSES_DIR . "GUI.php");
require_once(CLASSES_DIR . "Exceptions.php");
require_once(LIB_DIR . "Encoding.php");
require_once(LIB_DIR . "PHPMailer/PHPMailerAutoload.php");

use IEMO\Abstracts\DB;
use IEMO\Abstracts\GUI;
use \ForceUTF8\Encoding;

/**
 * Common behaviours
 *
 * This class can be used to execute common behaviours
 *
 * The class features the following methods:
 * 	@link        getMailConfig()
 * 	@link        sendMail()
 */
final class Behaviours {
    static private $config;
    static private $mail;

    public function __construct() {
        self::$config = GUI::getMailConfig();
    }

    /**
     * Build the Mail configuations
     * @return object                                   The Mail object
     */
    private function getMailConfig() {
        self::$mail = new \PHPMailer;
        self::$mail->isSMTP();
        self::$mail->Host = self::$config->mail->host;
        self::$mail->SMTPAuth = true;
        self::$mail->Username = self::$config->mail->username;
        self::$mail->Password = self::$config->mail->password;
        self::$mail->SMTPSecure = "tls";
        self::$mail->Port = self::$config->mail->port;
        self::$mail->SMTPOptions = array(
            "ssl" => array(
                "verify_peer"       => false,
                "verify_peer_name"  => false,
                "allow_self_signed" => true
            )
        );
        if(self::$config->mail->html == "false") {
            self::$mail->isHTML(false);
            self::$mail->ContentType = "text/plain";
            self::$mail->Encoding = "quoted-printable";
            self::$mail->CharSet = "UTF-8";
            self::$mail->WordWrap = 100;
        } else {
            self::$mail->isHTML(true);
            self::$mail->CharSet = "UTF-8";
        }
        self::$mail->setFrom(self::$config->mail->from, self::$config->mail->from_name);

        return self::$mail;
    }

    /**
     * Send a mail
     * @param  array                $to                 An array with a recipient "name" and "address"
     * @param  string               $subject            The mail subject
     * @param  array                $body               An array with an "html" and "txt" body
     * @return boolean
     */
    public function sendMail($to, $subject, $body) {
        self::$mail = self::getMailConfig();
        self::$mail->addAddress($to["address"], trim($to["name"]));
        self::$mail->Subject = $subject;
        if(is_string($body)) {
            $body["txt"] = $body;
        }
        self::$mail->Body = Encoding::toLatin1((isset($body["html"])) ? $body["html"] : $body["txt"] . quoted_printable_decode("\n-- =\n\n") . self::$config->mail->signature);
        // self::$mail->AltBody = $body["txt"];

        if(!self::$mail->send()) {
            Exceptions::run(_("Message could not be sent. Mailer Error: " . self::$mail->ErrorInfo));
        } else {
            return true;
        }
    }
}
?>
