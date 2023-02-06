<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Document</title>
    <link rel="stylesheet" href="src/assets/css/base/reset.css">
    <link rel="stylesheet" href="src/assets/css/base/root.css">
    <link rel="stylesheet" href="src/assets/css/base/base.css">
    <?php
        switch ($_SERVER['PATH_INFO']) {

            case '/home':
                echo "<link rel='stylesheet' href='src/assets/css/home.css'>";
                break;
            
            case '/empresa':
                echo "<link rel='stylesheet' href='src/assets/css/empresa.css'>";
                break;

            case '/catalogo':
                echo "<link rel='stylesheet' href='src/assets/css/catalogo.css'>";
                break;

            case '/maquinas':
                echo "<link rel='stylesheet' href='src/assets/css/maquinas.css'>";
                break;
        }
    ?>
</head>
<body>
    <header class="">
        <p>"Compromisso e qualidade de quem tem 46 anos no mercado"</p>
        <div class="header--bar flex">
            <div class="logo">
                <img class="" src="./src/assets/img/logo.jpeg" alt="">
                <span id="span_age">46 Anos</span>
            </div>
            <nav class="menu flex">
                <a class="menu--item <?= ($_SERVER['PATH_INFO'] == '/home')?"actual":""?>" href="/home">Home</a>
                <a class="menu--item <?= ($_SERVER['PATH_INFO'] == '/empresa')?"actual":""?>" href="/empresa">Empresa</a>
                <a class="menu--item <?= ($_SERVER['PATH_INFO'] == '/catalogo')?"actual":""?>" href="/catalogo">Catálogo</a>
                <!-- <a class="menu--item" href="">Contato</a> -->
            </nav>
        </div>
    </header>