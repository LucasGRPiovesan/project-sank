<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/src/includes/cabecalho.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/src/config/routes.php";

    $TEMPLATE = "";
    if (isset($ROUTES["{$_SERVER['REQUEST_METHOD']}"][$_SERVER['PATH_INFO']])) {
        $TEMPLATE = $ROUTES["{$_SERVER['REQUEST_METHOD']}"][$_SERVER['PATH_INFO']];
    } else {
        header('Location: /home');
    }

    include_once $_SERVER['DOCUMENT_ROOT']."/src/views/$TEMPLATE.php";

    include_once $_SERVER['DOCUMENT_ROOT']."/src/includes/rodape.php";
?>