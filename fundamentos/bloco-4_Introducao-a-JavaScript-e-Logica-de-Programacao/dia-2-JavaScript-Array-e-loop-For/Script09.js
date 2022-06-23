let numbers = [];

for (let index = 1;index < 26;index++){
    numbers.push(index)

}
for (let index = 0;index < 25;index++){
    numbers[index] = (numbers[index]/2)

}
console.log(numbers)