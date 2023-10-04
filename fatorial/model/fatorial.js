/****************************************************
* Objetivo: Calcular o fatorial de um número.
* Data: 21/09/23
* Autor: CAROLINA NEPONUCENA COSTA
* Versão: 1.0
*****************************************************/

const calcularFatorial=function(valorFatorial){
    let fatorial=Number(valorFatorial)


    if(fatorial==0)
        console.log('X -> ERROR: Não existe fatorial do número 0.') 
    else if(fatorial==1)
        console.log('X -> ERROR: É necessário que o valor seja maior que 1.')
    else if(isNaN(fatorial))
        console.log('X -> ERROR: É obrigatório apenas valores numéricos.')
    else if(fatorial=='')
        console.log('X -> ERROR: É obrigatório inserir um valor.')
    else{
        let resultado=1
        var fatorialString=`Fatorial do número ${fatorial} é de: ${fatorial}`
        for(let contador=fatorial;contador>=2;contador--){
            resultado=resultado*contador
            fatorialString+=` x ${contador-1}`
        }
        fatorialString+=` = ${resultado}`
        
    }

    return fatorialString
}

const exibirResultado=function(valorFatorial){
    console.log(calcularFatorial(valorFatorial))
}

module.exports={exibirResultado}