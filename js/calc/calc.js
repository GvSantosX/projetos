var teste = window.prompt("Digite algo");

function mostrar() {
    alert(`Você digitou:${teste}`);
}

function calcNum(num) {
    if (typeof gvisor == 'undefined') {
        document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
}

function calc(oper) {

}