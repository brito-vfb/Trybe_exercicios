let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordenar o array em ordem Crescente
for (let index = 1;index < numbers.length; index++){
    for(indexDois = 0; indexDois < index; indexDois++){
        if (numbers[index] < numbers[indexDois]){
            let valor = numbers[index];
            numbers[index] = numbers[indexDois]
            numbers[indexDois] = valor;
        }
    }
}
console.log(numbers);
for (let index = (numbers.length-2);index >= 0; index--){
    for(indexDois = (numbers.length-1); indexDois > index; indexDois--){
        if (numbers[index] < numbers[indexDois]){
            let valor = numbers[index];
            numbers[index] = numbers[indexDois]
            numbers[indexDois] = valor;
        }
    }
}
console.log(numbers);
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
newNumbers = [];
for (let index = 0;index < numbers.length; index++){
    let auxiIndex = index+1
    if (auxiIndex > (numbers.length-1)){
        let mult = numbers[index]*2
        newNumbers.push(mult); 
    }else{
        newNumbers.push((numbers[index]*numbers[auxiIndex]));
    }
}
console.log("ultima etapa")
console.log(numbers);
console.log(newNumbers);