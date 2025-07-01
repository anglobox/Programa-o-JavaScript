selecao = 0
while (selecao !== 3) {
    selecao = Number(prompt("Digite uma das seguintes opções: \n 1 - Olá \n 2 - Tchau \n 3 - Sair"))
    switch (selecao) {
        case 1:
            console.log("Olá")
            break
        case 2:
            console.log("Tchau")
            break;
        case 3:
            console.log("Fim")
        default:
            console.log("Opção invalida")
    }
}