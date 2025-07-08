let selecao = 0
let coca = 0
let choco = 0
let chips = 0
let cocaP = 5.50
let chocoP = 3.00
let chipsP = 4.00
let totalProdutosVendidos = 0
let totalFinalizarVenda = 0
let totalValorVendasDia = 0
let menu = 0
while (selecao !== 3) {
    selecao = Number(prompt("Sistema de Caixa de Loja \n Digite uma das seguintes opções: \n 1 - Realizar uma Venda \n 2 - Relatorio do Dia \n 3 - Sair"))
    switch (selecao) {
        case 1:
            menu = 0; // para reiniciar o menu
            while (menu !== 4) {
                console.log(" 1 - Coca-Cola (R$5,50)")
                console.log(" 2 - Chocolate (R$3,00)")
                console.log(" 3 - Chips (R$4,00)")
                console.log(" 4 - Finalizar a venda")
                menu = Number(prompt("Escolha os dos produtos a serem adicionados:"))

                switch (menu) {
                    case 1:
                        coca = coca + 1;
                        totalProdutosVendidos = totalProdutosVendidos + 1;
                        totalFinalizarVenda = totalFinalizarVenda + cocaP;
                        console.log("Coca-Cola adicionada");
                        break;

                    case 2:
                        choco = choco + 1;
                        totalProdutosVendidos = totalProdutosVendidos + 1;
                        totalFinalizarVenda = totalFinalizarVenda + chocoP;
                        console.log("Chocolate adicionado");
                        break;

                    case 3:
                        chips = chips + 1;
                        totalProdutosVendidos = totalProdutosVendidos + 1;
                        totalFinalizarVenda = totalFinalizarVenda + chipsP;
                        console.log("Chips adicionado");
                        break;

                    case 4:
                        console.log("Venda finalizada. Total da venda: R$" + totalFinalizarVenda);
                        totalValorVendasDia = totalValorVendasDia + totalFinalizarVenda;
                        totalFinalizarVenda = 0; // zera pra proxima venda se for fazer outra
                        break;

                    default:
                        console.log("Opção inválida");
                        break;
                }
            }
            break;
        case 2:
            console.log("Relatorio do dia:")
            console.log("Total vendido no dia: R$" + totalValorVendasDia);
            console.log("Número total de produtos vendidos: " + totalProdutosVendidos);
            break;
        case 3:
            console.log("Sair")
        break;
    }
}