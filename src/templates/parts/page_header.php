<header class="masthead mb-5">
    <div class="inner">
        <h3 class="masthead-brand">
            <?php
            if(!isset($_GET["novideo"])) {
                ?>
                <img src="<?= web(IMG_DIR); ?>logo_web_300.png" />
                <?php
            } else {
                ?>
                <img src="<?= web(IMG_DIR); ?>logo_bw_web_300.png" />
                <?php
            }
            ?>
        </h3>
        <ul class="nav nav-pills justify-content-end align-items-baseline mt-5">
            <li class="nav-item">
                <a class="nav-link <?= ($page == "") ? "active" : ""; ?>" href="./"><?= _("Home"); ?></a>
            </li>
            <li class="nav-item">
                <a class="nav-link <?= ($page == "contact_us") ? "active" : ""; ?>" href="./contact_us"><?= _("Contact us"); ?></a>
            </li>
            <?php
            if($logged) {
                $submenu_pages = ["user", "request_access"];
                ?>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle <?= (in_array($page, $submenu_pages)) ? "active" : ""; ?>" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><?= $user->username; ?></a>
                    <div class="dropdown-menu">
                        <?php if($user->is_admin) { ?>
                            <a class="dropdown-item <?= ($page == "subscribe") ? "active" : ""; ?>" href="./subscribe">
                                <i class="fa fa-user-plus text-muted" aria-hidden="true"></i> <?= _("Subscribe an user"); ?>
                            </a>
                            <div class="dropdown-divider"></div>
                        <?php } ?>
                        <a class="dropdown-item <?= ($page == "user") ? "active" : ""; ?>" href="./user">
                            <i class="fa fa-user-circle-o text-muted" aria-hidden="true"></i> <?= _("Profile"); ?>
                        </a>
                        <a class="dropdown-item" href="./logout">
                            <i class="fa fa-sign-out text-muted" aria-hidden="true"></i> <?= _("Logout"); ?>
                        </a>
                    </div>
                </li>
                <?php
            }
            ?>
        </ul>
    </div>
</header>
