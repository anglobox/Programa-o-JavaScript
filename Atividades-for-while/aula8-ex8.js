let base = Number(prompt("Base: "))
let expo  = Number(prompt("Expoente: "))
let potencia = 1

for (let i = 0; i < expo; i++) {
    potencia = potencia * base
}

console.log("Potencia:", potencia)