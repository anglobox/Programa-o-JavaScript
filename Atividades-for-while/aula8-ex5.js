let quantidade = Number(prompt("Informe quantos a quantidades de numeros que deseja digitar: "))
let menorNum = Number(prompt("Numero: "))
for( let i = 1; i < quantidade; i++ ) {
    let numero = Number(prompt("Numero: "))
    if (menorNum > numero) {
        menorNum = numero
    }
}