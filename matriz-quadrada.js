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
  [10, 8, -12]
]

// transformando meu dado para o tipo de entrada que eu realmente vou receber.usando o Array.from, eu tiro os elementos de dentro do array e retorno um string com os números separados por espaço
//let arr = Array.from(array)

//console.log(arr[1, 1]);
function diagonalDifference(arr) {

	// pesquisar no google e estudar: como percorrer e acessar os elementos de uma matriz (em programação)

	// Write your code here
	// diagonal principal:
  // 1ª diagonal: pegar o primeiro elemento da primeira linha, o 2º elemento da 2ª linha, e 3º elemento da 3ª linha.Nesse caso o índice do array é o mesmo do elemento a ser pego. se o array for uma linha só, então ele vai pegar o primeiro item, pular 3 número e pegar o próximo
	let resultadoD1 = 0;
	let resultadoD2 = 0;
	// aqui usei a lógica dele pegar o primeiro item do array que é onde a diagonal começa e pular mais 3 elementos, ou seja pular 4 indices pra pegar o próximo correspondente à diagonal.por isso fica posicao = posicao + 4
	for (let posicaoD1 = 0; posicaoD1 < arr.length; posicaoD1 += 4) {
		//transformando oro pego no array para número, pois precisamos somar esses números depois e por isso não quero  
    //ele em string
		let itemArray = parseInt(arr[posicaoD1]);
		// somando o número encontrado com o resultado pra chegar na soma de todos os números da diagonal 1.
		resultadoD1 = resultadoD1 + itemArray;
	}
	//console.log(resultadoD1);

	// 2ª diagonal: pegar o último elemento da primeira linha, o 2º elemento da 2ª linha, e 1º elemento da 3ª linha.Nessa caso o 
  //índice do array é o mesmo do elemento a ser pego só na segunda linha... para pegar os outro como faz ? pega diretamente o primeiro e o último ? ou coloca que pega o índice + 2 elementos e - 2 elementos já que assim vai dar conta de fazer a diagonal corretamente..Mas nesse caso, pegar = 2 e - 2 não seria um número mágico que dificultaria a manutenção do código?.

	//aqui começa em dois pq a diagonal cruzada sempre começa no último item da linha de 3 espaços, ou seja, sempre começa no 3º elemento.por isso inicia no indice 2 e como o último elemento da diagonal 2 termina no primeiro item da última linha, precisamos limitar o tamanho do array a arr.lenth - 2 pa não quermos pegar o último elemento.E aqui a posicao é posicao + 2 pq pulamos de dois em dois pra conseguir pegar os elementos da diagonal 2.
	for (let posicaoD2 = 2; posicaoD2 < arr.length - 2; posicaoD2 += 2) {
		let itemArrayD2 = parseInt(arr[posicaoD2]);
		resultadoD2 += itemArrayD2;
	}
	//console.log(resultadoD2);

	// calcular diferença
	// o math.abs() converte um número negativo em positivo. Como estou subtraindo, pode ser que o número fique negativo, e não é isso que é pedido, pede - se um número inteiro positivo.por isso precisa usar essa função aí.ou multiplicar o número por - 1
	var diferenca = Math.abs(resultadoD1 - resultadoD2);
	//console.log(diferenca);
	return diferenca;
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



/*let resultadoD1 = 0;
let resultadoD2 = 0;
for (let posicaoD1 = 0; posicaoD1 < arr.length; posicaoD1 += 4) {
	let itemArray = parseInt(arr[posicaoD1]);
	resultadoD1 = resultadoD1 + itemArray;
}

for (let posicaoD2 = 2; posicaoD2 < arr.length - 2; posicaoD2 += 2) {
	let itemArrayD2 = parseInt(arr[posicaoD2]);
	resultadoD2 += itemArrayD2;
}


var diferenca = Math.abs(resultadoD1 - resultadoD2);
console.log(diferenca);
return diferenca;*/