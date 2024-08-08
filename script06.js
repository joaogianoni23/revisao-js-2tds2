let armas = ["Granada", "Míssel", "Espada", "Lança perfume", "Ak", "12"];
let ataque = []

ataque.push("Danonão")
ataque.push(armas[1]);
ataque.push(armas[0]);
ataque.push(armas[2]);
ataque.push(armas[3]);
ataque.push(armas[4]);

console.log("Nome do robô:" + ataque[0]);
for (let i = 0; i < ataque.length; i++) {
        if (i == 0) {
            console.log("Nome do robô: " + ataque[i]);
        } else {
            console.log("Ataque " + [i] + ': ' + (ataque[i]))
        }
}