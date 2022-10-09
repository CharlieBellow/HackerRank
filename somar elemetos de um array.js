/* 
Dada uma matriz de inteiros, encontre a soma de seus elementos.
Por exemplo, se a matriz ar = [1,2,3], 1+2+3 =6, então volte 6.

Descrição da função

Complete a função simpleArraySum no editor abaixo. Ele deve retornar a soma dos elementos do array como um inteiro.

simpleArraySum tem os seguintes parâmetros:

ar : uma matriz de inteiros


Formato de entrada

A primeira linha contém um número inteiro, n, denotando o tamanho da matriz.
A segunda linha contém n inteiros separados por espaço que representam os elementos do array.

Restrições

0 <= n, ar[i] <= 100


Formato de saída

Imprima a soma dos elementos do array como um único inteiro.

Entrada de amostra

6
1 2 3 4 10 11


Saída de Amostra

31


Explicação

Imprimimos a soma dos elementos do array:.
1+2+3+4+10+11 =31.
 */


"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

let ar = [1, 2, 3, 4, 10, 11]
function simpleArraySum(ar) {
	// Write your code here
	let resultado = 0
	for (let i = 0; i < ar.length; i++) {
		resultado = ar[i] + resultado;
	}
	return resultado
	//console.log(resultado);
	
}

simpleArraySum(ar)
//resultado.push(soma);



// pode usar o .join() no final pra tirar os array e deixar só a string 

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arCount = parseInt(readLine().trim(), 10);

	const ar = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map(arTemp => parseInt(arTemp, 10));

	const result = simpleArraySum(ar);

	ws.write(result + "\n");

	ws.end();
}