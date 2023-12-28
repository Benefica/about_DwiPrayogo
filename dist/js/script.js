//Button List
const list = document.querySelector('#list');
const navMenu = document.querySelector('#nav-menu');
list.addEventListener('click', function () {
    list.classList.toggle('list-active');
    navMenu.classList.toggle('hidden');
});

//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};
