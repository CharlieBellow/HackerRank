/* 

Explicação 0

Neste exemplo:
a = (a[0], a[1], a[2]) = (5,6,7)
b = (b[0], b[1], b[2]) = (3,6,10)

Agora, vamos comparar cada pontuação individual:
a[0] > b[0] - então Alice recebe 1 ponto
a[1] = b[1] - então ninguém recebe ponto
a[2] < b[2] - então Bob recebe 1 ponto

A pontuação de comparação de Alice é 1 , e a pontuação de comparação de Bob é 1. Assim, retornamos o array [1,1].
*/

let a = [5,6,7]
let b = [3, 6, 10]

function compareTriplets(a, b) {
//let result = []
    // Write your code here
    let alice = 0
    let bob = 0
    //let sum = 0 
    for (let i = 0; i < a.length && i < b.length; i++) {
        if (a[i] > b[i]) {
            alice = alice + 1
            //sum = alice + bob
            //result.push(sum);
        } else if (a[i] < b[i]) {
            bob = bob + 1;
            //result.push(sum);
            //result.push(alice, bob);
        } else if(a[i] == b[i]){
            alice = alice + 0;
            bob = bob + 0;
		}
			//console.log(alice);
			console.log(bob);
    }
    var triplets = []
    triplets.push(alice, bob)
		console.log(triplets);
    return triplets
}

compareTriplets(a, b);



