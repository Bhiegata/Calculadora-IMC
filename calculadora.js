
//Função
function calcularIMC(){

// Entrada
let valorPeso = document.getElementById("peso").value;
let valorAltura = document.getElementById("altura").value;

//Validação
if (valorPeso <= 10 || valorAltura >= 2.50 || valorPeso == " " || valorAltura == " ") {
    alert("Digite o valor corretamente");
    document.getElementById("resultado").textContent = " ";
    document.getElementById("classificacao").textContent = " ";
    return;
}

// Processamento
let valorIMC = Number(valorPeso / (valorAltura * valorAltura));
let valorIMCFinal = Number(valorIMC.toFixed(2))

// Saída
document.getElementById("resultado").textContent = "Seu IMC é " + valorIMCFinal;

if(valorIMCFinal <= 18.5){
    document.getElementById("classificacao").textContent = "Abaixo do peso"
} else if(valorIMCFinal > 18.5 && valorIMCFinal <= 24.9){
    document.getElementById("classificacao").textContent = "Peso Normal"
} else if(valorIMCFinal > 24.9 && valorIMCFinal <= 29.9){
    document.getElementById("classificacao").textContent = "Sobrepeso"
} else if(valorIMCFinal > 29.9 && valorIMCFinal <= 34.9){
    document.getElementById("classificacao").textContent = "Obesidade grau I"
} else if(valorIMCFinal > 34.9 && valorIMCFinal <= 39.9){
    document.getElementById("classificacao").textContent = "Obesidade grau II"
} else {
    document.getElementById("classificacao").textContent = "Obesidade grau III"
}
}
