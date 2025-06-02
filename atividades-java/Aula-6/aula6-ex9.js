let num_neg1 = (Number(prompt("Digite 2 numeros para verificar se pelo menos 1 deles é negativo. Digite o primeiro numero: ")))
let num_neg2 = (Number(prompt("Digite o segundo numero: ")))
let negativo = num_neg1 <= 0 || num_neg2
console.log ("Um dos 2 numeros é negativo? Resultado:", negativo)