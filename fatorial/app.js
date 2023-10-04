var calculoFatorial=require('./model/fatorial')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite um valor válido: ',function(fatorialUsuario){
    fatorial=fatorialUsuario
    console.log(calculoFatorial.exibirResultado(fatorial))
    entradaDados.close()
})