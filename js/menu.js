const menu = document.querySelector('#menu');
const menuBurger = document.querySelector('#menuBurger');
const btnDownload = document.querySelector('.downloadPageButton');

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

btnDownload.addEventListener('mouseover', function (e) {
    btnDownload.src = "img/btnDownloadPageBranco2.png";
});

btnDownload.addEventListener('mouseout', function (e) {
    btnDownload.src = "img/btnDownloadPage2.png";
});