let lado1 = Number(prompt("Digite o primeiro lado do triangulo"))
let lado2 = Number(prompt("Digite o segundo lado do triangulo"))
let lado3 = Number(prompt("Digite o terceiro lado do triangulo"))
if (lado1 == lado2 && lado2 == lado3){
    console.log("Esse é um triangulo Equilátero")
}
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Esse é um triangulo Isósceles")
}
else {
    console.log("Esse é um triangulo Escaleno")
}