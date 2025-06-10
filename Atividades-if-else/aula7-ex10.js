let salario = Number(prompt("Digite seu salario e calcule o valor do imposto de renda: "))
if (salario <= 2000){
    console.log("Insento")
}
else if (salario > 2000 && salario <= 3500){
    console.log("10% do valor do salario, será descontado:", salario * 0.1)
}
else if (salario > 3500){
    console.log("20% do valor do salario, será descontado:", salario * 0.2)
}