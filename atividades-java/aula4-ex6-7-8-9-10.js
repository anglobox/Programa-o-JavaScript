//ex 6 
let base = 10
let alturatriangulo = 5
let areatriangulo = base * alturatriangulo / 2
console.log("Cálculando a área de um triângulo, considerando a base = 10 e altura = 5 teremos a área equivalente à:",areatriangulo)
//////////////////////////////////////////////////////////////

//ex 7
let num1 = 8
let num2 = 9
let num3 = 7
mediaaritimetica = (num1 + num2 + num3) / 3
console.log("Calculando a média aritmética desses três números: num1 = 8, num2 = 9, num3 = 7. \n A media aritimetica seria de:", mediaaritimetica)
/////////////////////////////////////////////////////////////

//ex 8
let valorProduto = 200
let desconto = 15

let valorDesconto = valorProduto * 15 / 100
let valorFinalProduto = valorProduto - valorDesconto
console.log("Valor do produto com desconto: ", valorFinalProduto)
////////////////////////////////////////////////////////////

//ex 9
let percurso = 480
let litros = 40
mediaDeConsumo = percurso / litros
console.log("Consumo médio:", mediaDeConsumo)
////////////////////////////////////////////////////////////

//ex 10
let prod1 = 45
let prod2 = 30
let prod3 = 25
let somaDosProdutos = prod1 + prod2 + prod3
let imposto = somaDosProdutos *0.1
console.log("Imposto: R$", imposto)
///////////////////////////////////////////////////////////

//ex 11
let valor = 1000
let percentual = valor ** 1.005
valor = valor * percentual
console.log("Juros compostos de 0,5 de R$1000 na poupança por 6 meses.\n R$", valor)
//////////////////////////////////////////////////////////

//ex 12
let r = 7
let π = 3.14
let area = π * r **2
let circunferencia = 2 * π * r
console.log("Area:", area, "\nCircunferencia:", circunferencia)
/////////////////////////////////////////////////////////

//ex 13
let salario = 1500
let diasTrabalhados = 22
let horasTrabalhadas = 8
let valorHora = (salario / diasTrabalhados) / horasTrabalhadas
console.log("Um trabalhador recebe R$ 1.500,00 por mês e trabalha 8 horas por dia, 22 dias por mês. Calcule o valor recebido por hora trabalhada.", valorHora.toFixed(2))