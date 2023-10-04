var paresEImpares =require('./model/parOuImpar')
var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira o valor inicial: ', function(numeroInicial){
    let valorInicial = numeroInicial

    entradaDados.question('Insira o valor final: ', function(numeroFinal){
        let valorFinal = numeroFinal

        console.log()
        console.log('[1] Pares [2] Ímpares [3] Ambos')
        entradaDados.question('Selecione uma opção: ', function(escolhaUsuario){

            let escolhaDaOpcao = escolhaUsuario

            paresEImpares.paresimpares(valorInicial, valorFinal, escolhaDaOpcao)


            entradaDados.close()
        })
    })

})