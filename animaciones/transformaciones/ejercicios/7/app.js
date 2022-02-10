

function hey() {
    console.log("hey")
    let bell = document.getElementsByClassName("bell")[0];
    bell.classList.remove("belly");
    setTimeout(() => {
        bell.classList.add("belly");
    }, 10);
}