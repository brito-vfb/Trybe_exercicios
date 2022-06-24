let fatorial = 1;
let saida = "O fatorial de 10 é "
for (let index = 1; index<=10;index+=1){
    fatorial = fatorial * index
    if (index < 10){
        saida = saida + index + " x ";
    }else{
        saida = saida + index
    }
    
}
console.log(saida,"=",fatorial)