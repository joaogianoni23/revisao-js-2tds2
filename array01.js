let carro1 = "Nivus"
let carro2 = "Gol"
let carro3 = "Azera"

const carro = []
carro [0] = "Up"
carro [1] = "Corsa"
carro [2] = "Celta"
carro [3] = "Santana"
carro [4] = "Fusca"
carro [5] = "Fiesta"

console.log(carro);
console.table(carro);
console.log(carro.length);

let carroCopia1 = [...carro]
console.log(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);

let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);