function toggleVisibilityMenu() {
    var itemsElements = document.getElementsByClassName("main-menu__items");
    var hamburgerElements = document.getElementsByClassName("main-menu__hamburger");
 
    if (itemsElements[0].className.indexOf("main-menu__items--movil-visible") >= 0) {
        itemsElements[0].className = " main-menu__items main-menu__items--movil-hide";
        hamburgerElements[0].innerHTML = "☰";
    } else {
        itemsElements[0].className = "main-menu__items main-menu__items--movil-visible";
        hamburgerElements[0].innerHTML = "Cerrar";
    }
}