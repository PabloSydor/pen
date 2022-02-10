function animar() {
    console.log("hey")
    var cuadradoElement=document.getElementById("cuadrado1");
    cuadradoElement.classList.remove("c-cuadrado--girar");
    setTimeout(function() {
        cuadradoElement.classList.add("c-cuadrado--girar");
    },10);
}