//var array = ["11", "2", "4", "4", "5", "6", "10", "8", "-12"];

let arr = ["11 2 4", "4 5 6", "10 8 -12"];
/*11 2 4
4 5 6
10 8 -12*/
//let array = []
//console.log(array.push(arr.slice(1,1)));
// separando o array por espaço e transformando em string
let array = arr.join(" ");

//let arr = array.join(" ")
console.log(array[2]);
//console.log(arr.join(" ").split(" "));
//console.log(arr.toString()[0]);
// transformando meu dado para o tipo de entrada que eu realmente vou receber. serando os números por espaço
//var arr = Array.from(array);
//console.log(arraySeparado);
// indice = 0 // 0 - 1 - 2
// posicao = 0 e 1

// percorrer um array e pegando sempre o que não for espaços. então posso separar os indices do arrays por espaços e depois pegar o que quero peo índice.
//console.log(arr[0][0] + arr[0][1]);
//console.log(arr[1][2]);
//console.log(arr[2][6] + arr[2][7]);
//var newArray = []
//var pega = newArray.push(arr.slice(1, 3))

//console.log(arr.slice(0, 1));

//console.log(arraySeparado.indexOf('4'));
//console.log(arr);
//console.log(arr[8]);

function diagonalDifference(arr) {
	var resultadoD1 = 0;

	var resultadoD2 = 0;
	// Write your code here
	// 1ª diagonal: pegar o primeiro elemento da primeira linha, o 2º elemento da 2ª linha, e 3º elemento da 3ª linha. Nessa caso o índice do array é o mesmo do elemento a ser pego.
	//se o array for uma linha só então ele vai pegar o primeiro item, pular 3 número e pegar o próximo

	// enquanto i < arraySeparado.length, faça isso
	//pegaNumeros(arraySeparado)
	//procurar o for mais simples
	//var posicao = 0;
	
//console.log(parseInt(arr.join(" ").split(" ")[8]));
	var posicaoD1 = 0
	for (var index = 0; index < arr.length; index++) {
		var itemArrayD1 = parseInt(arr.join(" ").split(" ")[posicaoD1]);
		//console.log(posicaoD1)
		posicaoD1 = posicaoD1 + 4
		//console.log(typeof parseInt(arr.join(" ").split(" ")[posicaoD1]), posicaoD1);
		//resultado.push(parseInt(itemArray))
		resultadoD1 = resultadoD1 + itemArrayD1;
		//console.log(typeof itemArrayD1);
		//console.log(resultadoD1);
	}
	//console.log(posicaoD1);
	//console.log(resultadoD1);


	// 2ª diagonal: pegar o último elemento da primeira linha, o 2º elemento da 2ª linha, e 1º elemento da 3ª linha. Nessa caso o índice do array é o mesmo do elemento a ser pego só na segunda linha... para pegar os outro como faz? pega diretamente o primeiro e o último? ou coloca que pega o índice +2 elementos e -2 elementos já que assim vai dar conta de fazer a diagonal corretamente.. Mas nesse caso, pegar =2 e -2 não seria um número mágico que dificultaria a manutenção do código?.

	//aqui começa em dois pq a diagonal cruzada sempre começa no último item da linha de 3 espaços, ou seja, sempre começa no 3º elemento. por isso inicia no indice 2
	var posicaoD2 = 2
	for (var i = 0; i < arr.length; i++) {
		//tranformando o número pego no array para número, pois precisamos somar esses números depois
		let itemArrayD2 = parseInt(arr.join(" ").split(" ")[posicaoD2]);
		//console.log(posicaoD2)
		posicaoD2 = posicaoD2 + 2;
		// aqui uso diagonalDois pq o meu resultadoD2
		resultadoD2 = resultadoD2 + itemArrayD2;
		//console.log(itemArrayD2);
	}
	//console.log(resultadoD2);


	//colocar em um array o resultado de cada diagonal para poder calcular a diferença(subtrair um pelo o outro)
	// calcular diferença
	// o math.abs() converte um número negativo em positivo
	var diferenca = Math.abs(resultadoD1 - resultadoD2);
	//console.log(diferenca);
	return diferenca;
}

	//console.log(resultado);


diagonalDifference(arr);



	/*	
tinha feito separado para ver se a soma funcionava sem o parseInt
var somaD1 = 0
	for (let i = 0; i < resultado.length; i++) {
		somaD1 = somaD1 + resultado[i]
	}
	//console.log(somaD1);
	//console.log(resultado);
*/