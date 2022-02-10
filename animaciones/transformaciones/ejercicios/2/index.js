function dale() {
    let texto = document.getElementById('text');
    texto.classList.remove('text-big');
    setTimeout(() => {
    texto.classList.add('text-big');
    }, 10);
}