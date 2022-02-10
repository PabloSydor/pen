function foo() {
    let bg = document.getElementsByClassName("c-contenedor")[0];
    let inp = document.getElementsByClassName("c-input")[0];
    bg.classList.add('azul');
    inp.classList.add('c-input--focus');
}


function foos() {
    let bg = document.getElementsByClassName("c-contenedor")[0];
    let inp = document.getElementsByClassName("c-input")[0];
    bg.classList.remove('azul');
    inp.classList.remove('c-input--focus');
}