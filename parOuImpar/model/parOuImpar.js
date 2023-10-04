const paresEImpares = function(numeroInicial, numeroFinal, escolhaUsuario){

    let valorInicial = Number(numeroInicial)
    let valorFinal = Number(numeroFinal)
    let escolha = Number(escolhaUsuario)

    if (valorInicial == '' || valorFinal == '')
    console.log('X -> ERROR: É obrigatória a entrada de todos os valores')

    else if(isNaN(valorInicial) || isNaN(valorFinal))
        console.log('X -> ERROR: Os valores inseridos devem ser números.')

    else if(valorInicial > 500 || valorInicial < 1)
        console.log('X -> ERROR: O valor inicial inserido deve estar entre 0 e  500.')

    else if (valorFinal > 1000 || valorFinal < 10)
        console.log('X -> ERROR: Os valor final inserido deve estar entre 10 e 1000.')

    else if (valorFinal < valorInicial)
        console.log('X -> ERROR: O valor final não pode ser menor que o inicial.')

    else if (valorFinal == valorInicial)
        console.log('X -> ERROR: O valores não podem ser iguais')
    else if(escolha != 1 && escolha != 2 && escolha != 3 )
    console.log('X -> ERROR: O valor não corresponde à nenhuma das opções ')
    else{
        
        let contPar = 0
        let contImpar = 0

        if(escolha ==1 || escolha ==3){
            console.log('Números pares')
            for(;valorInicial <= valorFinal; valorInicial++){
                if(valorInicial%2==0){
                    console.log(valorInicial)
                    contPar++
                }
            }
            console.log('Quantidade de pares encontrados: ' +contPar)
        }

        if(escolha==2 || escolha==3){        
        valorInicial = Number(numeroInicial)
        console.log()
        console.log('Números ímpares')
        for(;valorInicial <= valorFinal;valorInicial++){
            if(valorInicial%2!=0){
                console.log(valorInicial)
                contImpar++
            }
        }
        console.log('Quantidade de ímpares encontrados: ' +contImpar)
    }

    }
} 

module.exports ={
    paresEImpares
}