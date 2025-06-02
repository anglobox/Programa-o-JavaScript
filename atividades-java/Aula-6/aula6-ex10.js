let num3 = Number(prompt("Descubra se o numero que voce digitar é multiplo de 3 e 5: "))

let multiplo = num3 % 3 == 0 && num3 % 5 == 0
console.log ("É multiplo de 3 e 5? Resultado:", multiplo)