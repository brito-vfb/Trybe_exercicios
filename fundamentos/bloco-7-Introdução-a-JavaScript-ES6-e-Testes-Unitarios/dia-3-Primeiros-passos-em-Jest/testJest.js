function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
};

const min = (a,b) => {
    return a-b;
};

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
        newArr.push(arr[index]);
        }
    }
    return newArr;
};

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

function encodeSistem(vogal) {
    let letter = vogal;
    let codeList = [{ vogal: 'a', number: '1' }, { vogal: 'e', number: '2' },
      { vogal: 'i', number: '3' }, { vogal: 'o', number: '4' }, { vogal: 'u', number: '5' }];
    for (let code of codeList) {
      if (code.vogal === vogal) {
        letter = code.number;
      }
    }
    return letter;
}
function decodeSistem(vogal) {
    let letter = vogal;
    let codeList = [{ vogal: 'a', number: '1' }, { vogal: 'e', number: '2' },
      { vogal: 'i', number: '3' }, { vogal: 'o', number: '4' }, { vogal: 'u', number: '5' }];
    for (let code of codeList) {
      if (code.number === vogal) {
        letter = code.vogal;
      }
    }
    return letter;
}
  
function encode(sentence) {
    // seu código aqui
    let arraySentence = sentence.split('');
    for (let index = 0; index < arraySentence.length; index += 1) {
      arraySentence[index] = encodeSistem(arraySentence[index]);
    }
    return arraySentence.join('');
}
function decode(dSentence) {
    // seu código aqui
    let arraySentence = dSentence.split('');
    for (let index = 0; index < arraySentence.length; index += 1) {
      arraySentence[index] = decodeSistem(arraySentence[index]);
    }
    return arraySentence.join('');
}

  
  // implemente seus testes aqui
  
  // implemente seus testes aqui

module.exports = {sum, min, myRemove, myFizzBuzz, encode, decode};