let faltas = Number(prompt("Informe o numero de faltas do aluno: "))
let nota = Number(prompt("Informe a nota do aluno: "))
if (nota >= 60 && faltas <= 5)
    console.log("Aprovado")
else
    console.log("Reprovado")