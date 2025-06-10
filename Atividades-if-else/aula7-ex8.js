let num1 = Number(prompt("Digite o primeiro numero a ser calculado: "))
let num2 = Number(prompt("Digite o segundo numero a ser calculado: "))
let calc = String(prompt("Digite o operador que deseja usar ( + , - ,*, / ) : "))
let resultado = null
if (calc == "+") {
    resultado = num1 + num2
    console.log("A soma dos numeros é igual a:", resultado)
}
else if (calc == "-") {
    resultado = num1 - num2
    console.log("A subtração dos numeros é igual a:", resultado)
}
else if (calc == "*") {
    resultado = num1 * num2
    console.log("A multiplicação dos numeros é igual a:", resultado)
}
else if (calc == "/") {
    resultado = num1 + num2
    console.log("A diviisão dos numeros é igual a:", resultado)
}