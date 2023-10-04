
/****************************************************
* Objetivo: Calcular o IMC.
* Data: 21/09/2023
* Autor: CAROLINA NEPONUCENA COSTA 
* Versão: 1.0
*****************************************************/
const calcularImc=function(valorPeso,valorAltura){

    let peso=valorPeso
    let altura=valorAltura
    let imc
    let status

    if(peso==''||altura=='')
        console.log('X -> ERROR: É obrigatório inserir TODOS os valores.')
    else if(isNaN(peso)||isNaN(altura))
        console.log('X -> ERROR: É obrigatório APENAS de valores numéricos.')
    else{
        altura=altura/100
        imc=Number(peso)/(Number(altura)*Number(altura))
        console.log(' Seu IMC é: '+`${imc.toFixed(2)}`)
    }
    if(imc<18.5)
        status='SITUAÇÃO -> Abaixo do peso :(.'
    else if(imc>=18.5&&imc<=24.9)
        status='SITUAÇÃO -> Peso normal. :)'
    else if(imc>=25&&imc<=29.9)
        status='SITUAÇÃO -> Acima do peso. :/'
    else if(imc>=30&&imc<=34.9)
        status='SITUAÇÃO -> Obesidade nível I. :('
    else if(imc>=35&&imc<=39.9)
        status='SITUAÇÃO -> Obesidade nível II. :('
    else if(imc>=40){
        status='SITUAÇÃO -> Obesidade nível III. :('
    }
    return status
} 
module.exports={calcularImc}