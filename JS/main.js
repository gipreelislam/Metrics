/*
.header .nav > li:last-child:hover .mega-menu {
    top: calc(100% + 5px);
    z-index: 100;
    opacity: 1;
}
*/
let otherLinksBtn = document.querySelector(".header .nav > li:last-child a"),
    megaMenu = document.querySelector(".mega-menu"),
    upBtn = document.querySelector(".up"),
    otherLinksBtnClicked = false;

otherLinksBtn.onclick = function () {
    if (!otherLinksBtnClicked) {
        megaMenu.style.cssText = "top: calc(100% + 5px);z-index: 900;opacity: 1;";
        otherLinksBtnClicked = true;
    }
};

document.onclick = function (event) {
    if (event.target !== otherLinksBtn) {
        megaMenu.style.cssText = "top: calc(100% + 50px);z-index: -1;opacity: 0;";
        otherLinksBtnClicked = false;
    }
};

upBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

window.onscroll = function () {
    if (window.scrollY > 600) {
        upBtn.style.opacity = "1";
        upBtn.style.bottom = "50px";
    } else {
        upBtn.style.opacity = "0";
        upBtn.style.bottom = "30px";
    }
};