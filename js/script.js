// // Exercício 1 
// function calcularTabuada() {
//     numero = document.getElementById('numeroExercicio1').value
//     resultado = ""

//     for (i = 1; i <= 10; i++) {
//         resultado += numero + " x " + i + " = " + (numero * i) + "<br>"
//     }

//     document.getElementById('resultadoExercicio1').innerHTML = resultado
// }
// //=========================================================================
// // Exercício 2 
// function mostrarNumerosPares() {
//     numero = document.getElementById('numeroExercicio2').value
//     resultado = ""

//     for (i = 2; i <= numero; i += 2) {
//         resultado += i + " "
//     }

//     document.getElementById('resultadoExercicio2').innerHTML = resultado
// }
// //==========================================================================
// // Exercício 3 

// function calcularSoma() {
//     numero = parseInt(document.getElementById('numeroExercicio3').value)
//     soma = 0

//     while (numero !== -1) {
//         soma += numero
//         numero = parseInt(prompt("Digite um número (digite -1 para parar):"))
//     }

//     document.getElementById('resultadoExercicio3').innerHTML = "A soma dos números é: " + soma
// }

//=======================================
const array1 = [1, 4, 9, 16]
// Passe uma função para mapear
const map1 = array1.map(x => x * 2)
console.log(map1)
// Saída esperada: Array [2, 8, 18, 32]