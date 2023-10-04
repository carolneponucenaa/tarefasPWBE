var criandoTabuada=require('./model/calcularTabuada')
var readline=require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question(' -> Forneça uma tabuada inicial [entre os números 2 e 100]: ', function(tabuadaInicial){
    let inicialTabuada = tabuadaInicial

    entradaDeDados.question('-> Forneça uma tabuada final [entre os números 2 e 100]: ', function(tabuadaFinal){
        let finalTabuada = tabuadaFinal

        entradaDeDados.question('-> Forneça um contador inicial [entre os números 1 e 50]: ', function(contadorInicial){
            let inicialContador = contadorInicial

            entradaDeDados.question('-> Forneça um contador final [entre os números 1 e 50]: ', function(contadorFinal){
                let finalContador = contadorFinal

                criandoTabuada.calcularTabuada(inicialContador, finalContador, inicialTabuada, finalTabuada)
            })
        })
    })
})