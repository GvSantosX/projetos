// function mostrar() {
//     if ($('#fisica').is(':checked')) {
//         alert("Física");
//     } else if ($('#juridica').is(':checked')) {
//         alert("Jurídica");
//     } else {
//         alert("Escolha uma opção");
//     }
// }
function mostrar() {
    if (document.getElementById('fisica').checked) {
        alert("Física");
    } else if (document.getElementById('juridica').checked) {
        alert("Jurídica");
    } else {
        return;
    }
}

function next() {
    window.open("pagina2.html", "_self");
    // window.location.href = "pagina2.html";
}

function back() {
    window.open("teste_radio.html", "_self");
    // window.location.href = "teste_radio.html";
}