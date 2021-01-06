const visor = document.getElementById('visor');

const calculo = {
    primeiroValor: 0,
    segundoValor: 0,
    funcaoCalcular: null
};

//Adicionar evento ao carrregar janela
window.addEventListener("load", function() {
    atribuirEventos();
});

//Atribuir eventos para os botões de cálculo
function atribuirEventos() {

    document.getElementById('num0').addEventListener("click", agregaValor);
    document.getElementById('num1').addEventListener("click", agregaValor);
    document.getElementById('num2').addEventListener("click", agregaValor);
    document.getElementById('num3').addEventListener("click", agregaValor);
    document.getElementById('num4').addEventListener("click", agregaValor);
    document.getElementById('num5').addEventListener("click", agregaValor);
    document.getElementById('num6').addEventListener("click", agregaValor);
    document.getElementById('num7').addEventListener("click", agregaValor);
    document.getElementById('num8').addEventListener("click", agregaValor);
    document.getElementById('num9').addEventListener("click", agregaValor);
}

//Inserir valor no visor
function agregaValor() {
    if (isNaN(visor.value)) {
        visor.value = event.target.textContent;
    }
}

function oper(value) {
    oper = value;
    document.calc.visor.value += value;
}

//Função somar valore
function somar(num1, num2) {
    return num1 + num2;
}

//Funcão subtrair valores
function subtrair(num1, num2) {
    return num1 - num2;
}

//Função multiplicar valores
function multiplicar(num1, num2) {
    return num1 * num2;
}

//Função dividir valores
function dividir(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "Erro, divisão por zero!";
    } else if (num1 > num2 || num1 == num2) {
        return num1 / num2;
    } else if (num1 < num2) {
        return num2 / num1;
    } else {
        return;
    }
}

//Função limpar valores visor e objetos de cálculo
function limpar() {
    visor.value == "";

    calculo.primeiroValor == 0;
    calculo.segundoValor == 0;
    calculo.funcaoCalcular = null;
}

function limpar() {
    visor.value == "";
}