let maiorPrimo = 0;

for(let numero = 2; numero <=50;numero++){
    let flagPrimo = false;
    for (let auxi =2; auxi < numero; auxi++){
        if (numero % auxi == 0){
            flagPrimo = true;
        }
    }
    if (flagPrimo == false){
        maiorPrimo = numero;
    }
}
console.log("O maior primo entre 2 e 50 é",maiorPrimo);