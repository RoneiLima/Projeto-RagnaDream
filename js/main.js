const btnDownload = document.querySelector('.btnDownloadPage');

btnDownload.addEventListener('mouseover', function (e) {
    btnDownload.src = "img/btnDownloadPageBranco2.png";
});

btnDownload.addEventListener('mouseout', function (e) {
    btnDownload.src = "img/btnDownloadPage2.png";
});
