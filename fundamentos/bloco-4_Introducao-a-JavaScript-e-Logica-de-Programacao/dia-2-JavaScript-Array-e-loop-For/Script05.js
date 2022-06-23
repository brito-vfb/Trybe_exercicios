let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mariorValor = 0;

for (let index = 0;index < numbers.length;index++){
    if (numbers[index] > mariorValor){
        mariorValor = numbers[index]
    }
}

console.log("O maior número do Array é",mariorValor)