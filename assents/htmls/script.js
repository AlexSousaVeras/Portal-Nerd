function menuA() {
    let menuMobol = document.querySelector('.mobol-menu');
    if (menuMobol.classList.contains('open')) {
        menuMobol.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.svg";
    }
    else {
        menuMobol.classList.add('open');
        document.querySelector('.icon').src = "img/close.svg";
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("dark");
    let white = false;

    button.addEventListener("click", function() {
    if (white) {
     document.body.style.backgroundColor = ""; // Volta ao estado original
    } else {
    document.body.style.backgroundColor = "rgb(85, 83, 83)";
    }

    // Inverte o estado para a próxima vez que o botão for clicado
    white = !white;
    });
    });
