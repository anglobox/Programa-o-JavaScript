let ano = Number(prompt("Digite o ano a qual deseja saber se é bissexto: "))
    if (ano % 4 == 0 && ano % 100 !== 0)
    console.log ("O ano é bissexto")
    else
    console.log ("O ano não é bissexto")