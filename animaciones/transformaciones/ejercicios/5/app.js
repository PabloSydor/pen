function hola() {
    let ball = document.getElementsByClassName("pelota")[0];
    ball.classList.remove("animar");
    setTimeout(() => {
    ball.classList.add("animar");
        
    }, 10);
}