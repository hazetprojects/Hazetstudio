document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('scale-y-0');

        if (menuIcon.classList.contains('bx-menu')) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });

    AOS.init({
        duration: 400,
        offset: 80,
        once: true,
        easing: "ease-out-cubic",
        mirror: false
    });
});