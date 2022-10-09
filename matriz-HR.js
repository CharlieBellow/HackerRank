/* 

Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.

Por exemplo, a matriz quadrada arr é mostrado abaixo:

1 2 3
4 5 6
9 8 9  

A diagonal da esquerda para a direita =1+5+9=15. A diagonal da direita para a esquerda =3+5+9=17. Sua diferença absoluta é |15-17|=2.

Descrição da função

Complete a diagonalDifference função no editor abaixo.

diagonalDifference recebe o seguinte parâmetro:

int arr[n][m] : um array de inteiros

Retornar

int : a diferença diagonal absoluta

Formato de entrada

A primeira linha contém um único inteiro,n, o número de linhas e colunas na matriz quadrada arr.
Cada um dos próximos n linhas descreve uma linha, arr[i], e consiste em n inteiros separados por espaço arr[i][j].

Restrições

-100<= arr[i][j] <= 100
Formato de saída

Retorna a diferença absoluta entre as somas das duas diagonais da matriz como um único inteiro.

Entrada de amostra

3
11 2 4
4 5 6
10 8 -12


Saída de Amostra

15

Explicação

A diagonal primária é:

11
   5
     -12
Soma na diagonal primária: 11 + 5 - 12 = 4

A diagonal secundária é:

     4
   5
10

Soma na diagonal secundária: 4 + 5 + 10 = 19

Diferença: |4 - 19| = 15

Observação: |x| é o valor absoluto de x

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

//console.log(inputString[currentLine++]);
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

let arr = [
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12],
];

function diagonalDifference(arr) {
	
	// Write your code here
	// diagonal principal:
	let resultadoD1 = 0;
	let resultadoD2 = 0;
	// aqui usei a lógica dele pegar o primeiro item do array que é onde a diagonal começa e pular mais 3 elementos, ou seja pular 4 indices pra pegar o próximo correspondente à diagonal.por isso fica posicao = posicao + 4
    for (let linhaD1 = 0; linhaD1 < arr.length; linhaD1++) {
    for (let colunaD1 = 0; colunaD1 < arr.length; colunaD1++) {
      if (arr[linhaD1] == arr[colunaD1]) {
        let itemArray = arr[linhaD1][colunaD1]
        // somando o número encontrado com o resultado pra chegar na soma de todos os números da diagonal 1.
        resultadoD1 = resultadoD1 + itemArray;
        
      }
    }
	}
	// 2ª diagonal: 
  // como o índice conta a partir do zero, eu preciso colocar arr.length pra que o índice do array esteja de acordo com os números que eu quero percorrer
  var colunaD2 = arr.length - 1
  for (let linhaD2 = 0; linhaD2 < arr.length; linhaD2++) {
    
      let itemArrayD2 = arr[linhaD2][colunaD2]
      colunaD2 -= 1  
      resultadoD2 += itemArrayD2;
	}
	// calcular diferença
	// o math.abs() converte um número negativo em positivo. Como estou subtraindo, pode ser que o número fique negativo, e não é isso que é pedido, pede - se um número inteiro positivo.por isso precisa usar essa função aí.ou multiplicar o número por - 1
  var diferenca = Math.abs(resultadoD1 - resultadoD2);
  //console.log(resultadoD1);
  //console.log(resultadoD2);
	console.log(diferenca);
	//return diferenca;
}

diagonalDifference(arr);

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	let arr = Array(n);

	for (let i = 0; i < n; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, "")
			.split(" ")
			.map(arrTemp => parseInt(arrTemp, 10));
	}

	const result = diagonalDifference(arr);

	ws.write(result + "\n");

	ws.end();
}