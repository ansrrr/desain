<?php
    $_file_konten = "content-$halaman.html";

    if (file_exists($_file_konten)) {
        include $_file_konten;
    }
    else {
        echo "<main class = 'container my-5><div class = 'alert alert-warning'>Halaman tidak ditemukan</div></main>";
    }
?>