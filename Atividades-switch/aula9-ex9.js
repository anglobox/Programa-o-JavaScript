let soma = 0
let numero = ""

while (numero !== "Fim") {
    numero = prompt("Digite o numero ou 'Fim' para sair): ")
    
    if (numero !== "Fim")
        soma += Number(numero)
        console.log("Soma do total de numeros:", media)

}
console.log("Somatoria:", soma)