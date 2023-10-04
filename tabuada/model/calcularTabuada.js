/****************************************************
* Objetivo: Calcular a tabuada de um número.
* Data: 21/09/23
* Autor: CAROLINA NEPONUCENA COSTA
*****************************************************/

const criarTabuada = (tabuada, inicioContador, fimContador) => {
    console.log(`Tabuada do número [${tabuada}]`)
    for (let i = inicioContador; i <= fimContador; i++) {
        const resultado = tabuada * i
        console.log(`${tabuada} x ${i} = ${resultado}`)
    }
}

const calcularTabuada = (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal) => {
    tabuadaInicial = parseInt(tabuadaInicial)
    tabuadaFinal = parseInt(tabuadaFinal)
    contadorInicial = parseInt(contadorInicial)
    contadorFinal = parseInt(contadorFinal)

    if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)) {
        console.log("X -> ERROR: É necessário que o valor seja NUMÉRICO.")
        return
    }

    if (tabuadaInicial < 2 || tabuadaFinal > 100 || tabuadaInicial > 100 || tabuadaFinal < 2 ||
        contadorInicial < 1 || contadorFinal > 50 || contadorInicial > 50 || contadorFinal < 1) {
        console.log("X -> ERROR: Valores EXCEDIDOS.")
        return
    }

    for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
        criarTabuada(tabuada, contadorInicial, contadorFinal)
    }
}

module.exports = {
    calcularTabuada
}