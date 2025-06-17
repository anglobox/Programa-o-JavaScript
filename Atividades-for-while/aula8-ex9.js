n = Number(prompt("Digite um numero para saber a sequencia do fibonnaci do mesmo: "))
if (n == 1 || n == 2) {
    let atual = 1
    console.log(atual)
}
else {
    let ultimo = 1
    let penultimo = 1
    for (let i = 2; i < n; i++) {
        atual = ultimo + penultimo
        penultimo = ultimo
        ultimo = atual
    }
    console.log(atual)
}