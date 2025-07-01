// Escreva um programa que simula um sistema de login. O usuário tem até 3
// tentativas para acertar a senha correta. Se errar 3 vezes, o acesso é negado.
let loginU = 0
let loginS = 0
let usuario = "admin"
let senha = "admin"
let usuario1 = null
let senha1 = null

while (loginU < 3) {
    usuario1 = String(prompt("Digite o nome de usuario (voce tem 3 tentativas)"))
    if (usuario1 != usuario) {
        console.log("Login incorreto")
        loginU = loginU + 1
    }
    else {
        console.log("Login correto")
        while (loginS < 3) {
            senha1 = String(prompt("Digite a senha do usuario (voce tem 3 tentativas)"))
            if (senha1 != senha) {
                console.log("Login incorreto")
                loginS = loginS + 1
            }
            else {
                console.log("Senha correta")
                break
            }
        }
        break //Ele ta dento do else mas não esta dentro do while
    }
}