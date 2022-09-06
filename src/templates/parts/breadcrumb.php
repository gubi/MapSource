<nav>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="./"><?= _("Home"); ?></a></li>
        <?php
        if(isset($_GET["p"]) && trim($page) !== "") {
            ?>
            <li class="breadcrumb-item active" aria-current="page">
                <?= ucfirst(str_replace("_", " ", $page)); ?>
            </li>
            <?php
        }
        ?>
    </ol>
</nav>
