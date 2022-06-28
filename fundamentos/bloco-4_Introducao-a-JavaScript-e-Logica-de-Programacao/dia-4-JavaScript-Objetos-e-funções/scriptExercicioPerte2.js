function palindromo (word){
    wordReverse = word.split('').reverse().join('');
    if (wordReverse === word){
        return true;
    }else{
        return false;
    }
}
function maiorIndice(nums){
    maxIndexNumber = 0;
    for (index in nums){
        if (index == 0){
            maxIndexNumber = index;
        }else{
            if(nums[maxIndexNumber] < nums[index]){
                maxIndexNumber = index;
            }
        }
    }
    return maxIndexNumber;
}
function menorIndice(nums){
    minIndexNumber = 0;
    for (index in nums){
        if (index == 0){
            minIndexNumber = index;
        }else{
            if(nums[minIndexNumber] > nums[index]){
                minIndexNumber = index;
            }
        }
    }
    return minIndexNumber;
}
function maiorNome(names){
    largerWord = '';
    for (word of names){
        if(largerWord.length < word.length){
            largerWord = word;
        }
    }
    return largerWord;
}
function repete(nums){
    repeteNumbers = [];
    for(number of nums){
        // constroi um objeto rep - de repticao com um atributo number e outro repeticao
        let rep = {
            number: 0,
            repeticao:0
        };
        flag = 0;
        if (repeteNumbers.length == 0){ // se o array de rep's estiver vazio
            rep.number = number;        // adiciona o primeiro valor de nums como um objeto rep
            rep.repeticao = 1;          // com atributo number igual ao valor de nums[0] 
            repeteNumbers.push(rep);    // e com o valor de repeticao como 1
        }else{
            for( item of repeteNumbers){       // se o valor de nums já possui um objeto rep
                if (number == item.number){    // O valor de repeticao desse objeto incrementa em 1
                    item.repeticao = item.repeticao + 1;
                    flag = 1;    // quer fizer que existe um objeto rep referente valor de nums 
                }
            }
            if (flag == 0){          // que dizer que ainda não existe um objeto rep referente ao numero
                rep.number = number; // adiciona o numero como um objeto rep, tendo como atributo:
                rep.repeticao = 1;   // number = numero && repeticao = 1 
                repeteNumbers.push(rep);
            }
        }
    }
    return repeteNumbers;
}
function maiorRepete(nums){
    repNumbers = repete(nums);
    let greater = {
        number: 0,
        repeticao:0
    }
    for (rep of repNumbers){
        if (greater.repeticao < rep.repeticao){
            greater = rep;
        }
    }
    return greater.number;
}
function somaN(number){
    sum = 0
    for(let index = number; index > 0; index--){
        sum = sum + index;
    }
    return sum
}
function checkEnd(word,ending){
    indexEnd = word.length;
    indexStart = word.length - ending.length;
    if (ending == word.substring(indexStart,indexEnd)){
        return true;
    }else{
        return false;
    }
}
// console.log(palindromo('arara'))
// console.log(maiorIndice([2, 4, 6, 7, 10, 0, -3]));
// console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));
// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
// console.log([2, 3, 2, 5, 8, 2, 3])
// console.log(repete([2, 3, 2, 5, 8, 2, 3]))
// console.log(maiorRepete([2, 3, 2, 5, 8, 2, 3]))
// console.log(somaN(5))
console.log(checkEnd('trybe', 'oi'))