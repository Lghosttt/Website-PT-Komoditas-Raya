document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        // Ubah ikon tombol saat menu aktif/tidak aktif
        if (navMenu.classList.contains("active")) {
            menuToggle.innerHTML = "✖"; // Tampilkan ikon "X"
        } else {
            menuToggle.innerHTML = "☰"; // Kembali ke ikon menu
        }
    });
});