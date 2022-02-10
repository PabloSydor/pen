function toggleVisibilityMenu() {
    var itemsElements = document.getElementsByClassName("c-menu__options");
    var hamburgerElements = document.getElementsByClassName("c-menu__hamburger");
 
    if (itemsElements[0].className.indexOf("c-menu__options--movil-visible") >= 0) {
        itemsElements[0].classList.add("c-menu__options--movil-hide");
        itemsElements[0].classList.remove("c-menu__options--movil-visible");
        hamburgerElements[0].innerHTML = "☰ Menu";
    } else {
        itemsElements[0].classList.remove("c-menu__options--movil-hide");
        itemsElements[0].classList.add("c-menu__options--movil-visible");
        hamburgerElements[0].innerHTML = "Cerrar";
    }
}