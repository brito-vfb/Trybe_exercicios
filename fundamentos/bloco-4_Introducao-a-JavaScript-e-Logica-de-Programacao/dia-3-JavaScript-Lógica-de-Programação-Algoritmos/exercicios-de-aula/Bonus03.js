let lado = 5;
for(let index = 0; index < lado; index++){
    let linha = ""
    for (let auxi = 0; auxi < (lado-index); auxi++){
        linha = linha + " ";
    }
    for (let auxi = (lado-index); auxi <= lado; auxi++){
        linha = linha + "*";
    }
    console.log(linha)
}