let numeroSecreto = Math.round (Math.random() * 9)
console.log(numeroSecreto)

let contPalpites = 0
let palpite = -1

while (palpite != numeroSecreto) {
    palpite = Number(prompt("Vamos jogar adivininhe um numero de 1 a 10: "))
    contPalpites = contPalpites + 1
}
console.log("Parabens, você acertou!!!")
console.log("Numero de palpites:", contPalpites)
