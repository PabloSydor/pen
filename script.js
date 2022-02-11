function animar(value) {
    let noticia = document.getElementById(value.parentNode.id);
    console.log(value.parentNode.id)
    noticia.classList.add("c-noticia--animar");
    setTimeout(() => {
        noticia.classList.add("c-noticia--hide");
    }, 1000);
}