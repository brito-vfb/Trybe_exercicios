const {expect} = require('expect');
const {sum, min} = require('./testJest');

test('verifica afuncao que veio', () =>{ 
    expect(sum(2, 1)).toBe(3);
});