let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordenar o array em ordem Crescente
for (let index = 1;index < numbers.length; index++){
    for(indexDois =0; indexDois < index; indexDois){
        if (numbers[index] < numbers[indexDois]){
            let valor = numbers[index];
            numbers[index = numbers[indexDois]]
            numbers[index] = valor;
        }
    }
}
console.log(numbers)