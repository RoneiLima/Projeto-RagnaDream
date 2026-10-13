const menu = document.querySelector('#menu');
const menuBurger = document.querySelector('#menuBurger');

function showDropdownMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function changeMenu () {
    if (window.innerWidth >= 1200) {
        menu.style.display = 'block';
        menuBurger.style.display = 'none';
    } else {
        menu.style.display = 'none';
        menuBurger.style.display = 'block';
    }
}