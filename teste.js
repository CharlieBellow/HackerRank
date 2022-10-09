/* exercício 3: reservar espaço no cinema ----------------------------
considere a fileira b com 10 cadeiras
*/
var cadeiras = new Array(10);

//mostre os espaços disponíveis:
//[ b 1 ] [ b 2 ] [ b 3 ] [ b 4 ] [ b 5 ] [ b 6 ] [ b 7 ] [ b 8 ] [ b 9 ] [ b 10 ]
for (let index = 0; index < cadeiras.length; index++) {
	cadeiras[index] = `[ B ${index + 1}]`;
}
console.log(cadeiras);

//leia o lugar disponível que a pessoa quer reservar. ex: b3
//pergunte se quer reservar outro: (s/n)
var reserva;
var resposta = "s";

while (resposta == "s") {
	reserva = prompt(`${cadeiras}
  
  qual lugar você quer reservar?`);
	for (let index = 0; index < cadeiras.length; index++) {
		if (reserva == cadeiras[index]) {
			cadeiras[index] = "Indisponível";
		}
	}

	resposta = prompt("quer reservar outro lugar? (s/n)");
}

/*
se a pessoa digitar sim, mostra novamente os espaços disponíveis, mas o espaço b3 não vai estar disponível. nesse caso eu faço o array[x] (posição do número reservado receber outro valor, tip "INDISPONÍVEL"). Pra isso vou ter que percorrer o array  e ver se nele inclui o termo pesquisado, se tiver eu troco. e tenho que verificar antes se na posição que a pessoa quer tem a palavra insdiponível se tiver loga dizwndo que está indisponível 

se tentar reservar a b3 tem que dizer que o lugar está ocupado.

*/
