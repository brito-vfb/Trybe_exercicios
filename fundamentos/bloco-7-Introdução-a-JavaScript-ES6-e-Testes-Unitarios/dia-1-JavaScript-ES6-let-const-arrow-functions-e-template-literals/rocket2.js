const fatorial = number => (number === 0) ? 1 : number * fatorial(number-1) ;
const maiorPalavra = frase => {
    const fraseArray = frase.split(' ');
    let mpalavra = '';
    for (let palavra of fraseArray) {
        if (mpalavra.length < palavra.length) {
            mpalavra = palavra;
        }
    }
    return mpalavra;
}
console.log (fatorial(5));
