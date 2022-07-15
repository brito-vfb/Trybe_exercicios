const testingScope = escopo => (escopo === true) ? `Não devo ser utilizada fora do meu escopo (if) 
ótimo, fui utilizada no escopo !` : 'Não devo ser utilizada fora meu escopo (else)';

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaArray = lista => {
    const orderList = lista.sort((a, b) => a - b);
    let resposta = 'Os números';
    for (let index =0 ; index < orderList.length; index += 1) {
        (index === (orderList.length -1)) ? 
        resposta = `${resposta} ${orderList[index]} e encontram ordenados de forma crescente!`:
        resposta = `${resposta} ${orderList[index]},`;
    }
    return resposta;
}

console.log(ordenaArray(oddsAndEvens)); // será necessário alterar essa linha 😉

console.log(testingScope(false));0