<?php
if(!defined("SYSTEM_ROOT")) { require_once("_defines.php"); }
// require_once(ABSTRACT_CLASSES_DIR . "DB.php");
require_once(TRAITS_DIR . "string_functions.php");
use MapSource\string_functions as string_functions;

/**
 * Get settings
 */
$settings = string_functions::array_to_object(yaml_parse_file(YML_DIR . "settings.yml"));
require_once(FUNCS_DIR . "login.php");

$page = (!isset($_GET["p"]) ? "" : $_GET["p"]);

?>
<!doctype html>
<html lang="it">
    <?php require_once(HTML_PARTS_DIR . "head.php"); ?>

    <body>
        <header class="site-header d-flex flex-column flex-md-row px-md-4 mb-3">
            <p class="h5 my-0 me-md-auto fw-normal">Company name</p>
            <nav class="my-2 my-md-0 me-md-3">
                <!-- <a class="py-2" href="#" aria-label="Product">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                </a> -->
                <?php
                // $socials = string_functions::array_to_object(yaml_parse_file(YML_DIR . "socials.yml"))->socials;
                //
                // foreach($socials as $k => $v) {
                    ?>
                    <!-- <a class="btn btn-sm py-2 d-none d-md-inline-block text-primary" href="<? /*$v->url;*/ ?>" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="<? /*$v->name;*/ ?>" style="color: <? /*$v->color;*/ ?> !important;">
                        <i class="fa <? /*$v->icon;*/ ?>" aria-hidden="true"></i>
                    </a> -->
                    <?php
                // }
                ?>
            </nav>
        </header>


        <div class="cover-container d-flex h-100 pt-3 mx-auto flex-column">
            <?php require_once(HTML_PARTS_DIR . "page_header.php"); ?>

            <main id="container" role="main" class="inner cover text-left pl-3 pr-3">
                <?php require_once(HTML_PARTS_DIR . "breadcrumb.php"); ?>
                <?php
                switch($page) {
                    // case "logout":
                    //     setcookie("iau", "null", time() - 999999, "/", ".{$domain}");
                    //     header("Location: ./");
                    //     break;
                    // case "subscribe":
                    //     if($logged) {
                    //         require_once(TEMPLATES_DIR . "subscribe_user.php");
                    //         exit();
                    //     } else {
                    //         require_once(TEMPLATES_DIR . "home.php");
                    //     }
                    //     break;
                    // case "allow_user":
                    //     if(isset($user)) {
                    //         require_once(TEMPLATES_DIR . "allow_user.php");
                    //     } else {
                    //         require_once(TEMPLATES_DIR . "home.php");
                    //     }
                    //     break;
                    // case "user":
                    //     if(isset($user)) {
                    //         require_once(TEMPLATES_DIR . "user.php");
                    //     } else {
                    //         header("Location: ./");
                    //     }
                    //     break;
                    // case "contact_us":
                    //     require_once(TEMPLATES_DIR . "contact.php");
                    //     break;
                    case "":
                    default:
                        require_once(TEMPLATES_DIR . "home.php");
                        break;
                }
                ?>
            </main>

            <?php require_once(HTML_PARTS_DIR . "footer.php"); ?>
        </div>

        <?php require_once(HTML_PARTS_DIR . "scripts.php"); ?>

        <!-- Modal -->
        <div class="modal fade" id="alert" data-backdrop="static" tabindex="-1" aria-labelledby="user_permissions_alert" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="user_permissions_alert"><?= _("Are you sure?"); ?></h5>
                        <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-left text-body">
                        <b>
                            <?= _("The user will be able to activate other users"); ?>
                        </b>
                        <p class="text-muted">
                            <?= _("Please review its permission"); ?>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-secondary float-left" data-dismiss="modal" value="<?= _("Cancel"); ?>" />
                        <input type="button" class="btn btn-danger" id="allow_user_btn" value="<?= _("Allow user permissions"); ?>" />
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
