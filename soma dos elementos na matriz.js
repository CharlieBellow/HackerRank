/* 

Neste desafio, você deve calcular e imprimir a soma dos elementos em uma matriz, tendo em mente que alguns desses inteiros podem ser bem grandes.

Descrição da função

Complete a função aVeryBigSum no editor abaixo. Deve retornar a soma de todos os elementos do array.

aVeryBigSum tem os seguintes parâmetros:

int ar[n] : uma matriz de inteiros.


Retornar

long : a soma de todos os elementos do array


Formato de entrada

A primeira linha da entrada consiste em um inteiro.
A próxima linha contém inteiros separados por espaço contidos na matriz.

Formato de saída

Retorna a soma inteira dos elementos na matriz.

Restrições

1<= n <= 10
0 <= ar[i] <= 10 *(10 - 10 elevado a 10)

Entrada de amostra

5
1000000001 1000000002 1000000003 1000000004 1000000005


Saída

5000000015

Observação:

O intervalo do inteiro de 32 bits é.

(-2(*31) to (2(*31) -1) ou [-2147483648, 2147483647])


Quando adicionamos vários valores inteiros, a soma resultante pode exceder o intervalo acima. Você pode precisar usar long int C/C++/Java para armazenar tais somas.



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
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
function aVeryBigSum(ar) {
	// Write your code here

	let result = 0;

		for (let i = 0; i < ar.length; i++) {
			result = result + ar[i];
		}
    console.log(result);
		return result;
	
}

aVeryBigSum(ar)

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arCount = parseInt(readLine().trim(), 10);

	const ar = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map(arTemp => parseInt(arTemp, 10));

	const result = aVeryBigSum(ar);

	ws.write(result + "\n");

	ws.end();
}