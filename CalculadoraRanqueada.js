let rank = calculadoraRanqueada(1001,735)

console.log("Saldo de partidas do jogador Samurai X é: " + resultado + " Seu rank é : " + rankHeroi)

function calculadoraRanqueada(vitorias,derrotas,){
    resultado = vitorias - derrotas
    if(resultado<10){
        rankHeroi="Ferro"
    }
    else if(resultado <=20){
        rankHeroi="Bronze"
    }
    else if(resultado <=50){
        rankHeroi="Prata"
    }
    else if(resultado <=80){
        rankHeroi="Ouro"
    }
    else if(resultado<=90){
        rankHeroi="Diamante"
    }
    else if(resultado<=100){
        rankHeroi="Lendário"
    }
    else if(resultado>=101){
        rankHeroi="IMORTAL"
    }
    return resultado
   
}

