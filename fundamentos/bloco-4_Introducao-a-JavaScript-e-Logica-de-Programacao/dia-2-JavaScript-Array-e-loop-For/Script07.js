let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 0;

for (let index = 0;index < numbers.length;index++){
    if (index === 0){
        menorValor = numbers[index];
    }else if (numbers[index] < menorValor){
        menorValor = numbers[index]
    }
}

console.log("O menor número do Array é",menorValor)