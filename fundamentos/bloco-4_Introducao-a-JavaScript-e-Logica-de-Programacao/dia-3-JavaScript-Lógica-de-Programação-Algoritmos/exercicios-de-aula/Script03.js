let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigestWord = "";
let smallerWord = "";

for(let index = 0; index < array.length; index++){
    if (index === 0){
        bigestWord = array[index];
        smallerWord = array[index];
    }else{
        if (bigestWord.length < array[index].length){
            bigestWord = array[index];
        }
        if (smallerWord.length > array[index].length){
            smallerWord = array[index];
        }
    }
}
console.log("A Menor palavra é",smallerWord)
console.log("A Maior palavra é",bigestWord)