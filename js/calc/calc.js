//Variáveis globais
var valor;
var resultado;

//Função para agregar valor no visor
function botao(num) {
    valor = document.calc.visor.value += num;
}

//Função para limpar o visor
function limpar() {
    document.calc.visor.value = "";
}

function calcular() {
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-BR');
}