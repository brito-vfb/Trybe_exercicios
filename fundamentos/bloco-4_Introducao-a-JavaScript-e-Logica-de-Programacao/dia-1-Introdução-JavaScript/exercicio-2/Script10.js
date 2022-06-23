const custoProduto = 100;
const valorDeVenda = 130;
let impostoSobreOCusto = custoProduto*0.2;
let custoTotal = custoProduto + impostoSobreOCusto;
if (custoProduto < 0 || valorDeVenda < 0 || custoTotal > valorDeVenda){
    console.log("ERRO: Pelo menos um valor é menor que 0 ou ovalor de venda é menor que o custo total")
}else{
    lucroUnit = valorDeVenda - custoTotal
    console.log(1000*lucroUnit,"é o lucro obtido com a venda de Mil produtos")
}
