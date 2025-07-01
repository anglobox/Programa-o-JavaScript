let soma = 0
let numero = 0

while (numero >= 0) {
    numero = Number(prompt("Digite um numero (Negativo para sair): "))

    if (numero >= 0) {
        soma += numero
    }
}
console.log("Soma:",soma)