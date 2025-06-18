<?php 
    include("komponen/header.html");
    include("komponen/navigasi.html");
    // include("content-beranda.html");

    $menu = 'beranda';
    
    if (isset($_GET['menu'])) {
        $menu = $_GET['menu'];
    }
    else {
        $menu = 'beranda';
    }

    include 'komponen/konten.php';
    include("komponen/footer.html");
?>




    

    

    

    

