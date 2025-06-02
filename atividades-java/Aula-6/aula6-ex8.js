let num1 = (Number(prompt("Digite 2 numeros para verificar se são iguais e ambos maiores que 10. Digite o primeiro numero: ")))
let num2 = (Number(prompt("Digite o segundo numero: ")))
let iguais = num1 == num2
let maior_10 = num1 && num2 >= 10
console.log("Os numeros são iguais? Resultado:", iguais)
console.log("Os numeros são maiores que 10? Resultado:", maior_10)