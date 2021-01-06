const visor = document.getElementById('visor');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

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
    document.getElementById('som').addEventListener("click", agregaOper);
    document.getElementById('sub').addEventListener("click", agregaOper);
    document.getElementById('mul').addEventListener("click", agregaOper);
    document.getElementById('div').addEventListener("click", agregaOper);

    document.getElementById('limpar').addEventListener("click", limpar);
}

//Mostrar que tal operação foi selecionada
function agregaOper() {
    console.log("Operador inserido!")
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
    num1.value == "";
    num2.value == "";

    calculo.primeiroValor == 0;
    calculo.segundoValor == 0;
    calculo.funcaoCalcular = null;
}