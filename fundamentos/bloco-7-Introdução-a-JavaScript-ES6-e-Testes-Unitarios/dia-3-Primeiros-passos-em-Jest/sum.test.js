const {expect} = require('expect');
const {sum, min, myRemove, myFizzBuzz, encode, decode} = require('./testJest');

test('Testa de 4 + 5 = 9', () =>{ 
    expect(sum(4, 5)).toBe(9);
});

test('Testa de 0 + 0 = 0', () =>{ 
    expect(sum(0, 0)).toBe(0);
});

test('verifica se dá um trow', () =>{ 
    expect(() => {sum(4, '5')}).toThrow();
});

test('verifica se dá um trow com a menssagem', () =>{ 
    expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
});

test('verifica se a função remove o 3 do array [1, 2, 3, 4]', () =>{ 
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('verifica se a função não retorna o array  [1, 2, 3, 4]', () =>{ 
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('verifica se a função remove o 5 do array [1, 2, 3, 4]', () =>{ 
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('Testa se o número 15 e divisivel por 5 e 3 e a funcao retorna fizzbuzz', () =>{ 
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

test('Testa se o número 3 e retorna fizz', () =>{ 
    expect(myFizzBuzz(3)).toEqual('fizz');
});

test('Testa se o número 5 retorna buzz', () =>{ 
    expect(myFizzBuzz(5)).toEqual('buzz');
});

test('Testa se o número 7 retorna a si próprio', () =>{ 
    expect(myFizzBuzz(7)).toEqual(7);
});

test('Testa se a string oi retorna false', () =>{ 
    expect(myFizzBuzz('oi')).toBeFalsy();
});

test('Testa se encode é uma funcao', () =>{ 
    expect(typeof encode).toBe('function');
});

test('Testa se decode é uma funcao', () =>{ 
    expect(typeof decode).toBe('function');
});

test('Testa se encode retorna 1, 2, 3, 4, 5 quando recebe a, e, i, o, u', () =>{ 
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
});

test('Testa se decode retorna a, e, i, o, u quando recebe 1, 2, 3, 4, 5', () =>{ 
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
});