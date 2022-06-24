let lado = 7;

if (lado % 2 == 0 || lado == 1){
    console.log("Não é possivel montar a piramide com números pares ou lado = 1")
}else{ 
    for(let index = 0; index < lado; index++){
        let linha = "";
        if (index % 2 == 0){
            if (index ==(lado-1)){
                auxi = (lado-index-1)/2;
                for (let aIndex =0;aIndex < auxi;aIndex++){
                    linha = linha + " ";
                }
                for(let bIndex = auxi;bIndex <(lado-auxi);bIndex++){
                        linha = linha + "*";
                }
            }else{
                auxi = (lado-index-1)/2;
                for (let aIndex =0;aIndex < auxi;aIndex++){
                    linha = linha + " ";
                }
                for(let bIndex = auxi;bIndex <(lado-auxi);bIndex++){
                    if (bIndex == auxi|| bIndex == (lado-auxi-1)){
                        linha = linha + "*";
                    }else{
                        linha = linha + " ";
                    }
                }
            }
        }
        console.log(linha);
    }
}