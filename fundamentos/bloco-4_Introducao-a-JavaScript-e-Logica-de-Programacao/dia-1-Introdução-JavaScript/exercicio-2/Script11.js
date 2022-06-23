let salarioBruto = 3000;
let salarioBase = 0;
let impostoRenda = 0;
//calculo da Alicota do INSS
if (salarioBruto < 1556.95 ){
    salarioBase = salarioBruto*(1-0.08);
}else if (salarioBruto < 2594.93){
    salarioBase = salarioBruto*(1-0.09);
}else if (salarioBruto < 5189.83){
    salarioBase = salarioBruto*(1-0.11);
}else {
    salarioBase = salarioBruto - 570.88;
}
if (salarioBase < 1903.99){
    impostoRenda = 0;
}else if (salarioBase < 2826.66){
    impostoRenda = (salarioBase * (0.075)) - 142.80;
}else if (salarioBase < 3.751,06){
    impostoRenda = (salarioBase * (0.15)) - 354.80;
}else if (salarioBase < 4664.69){
    impostoRenda = (salarioBase * (0.225)) - 636.13;
}else{
    impostoRenda = (salarioBase * (0.275)) - 869.36;
}
console.log("Partindo de um salario bruto de",salarioBruto," o liquido obtido é",(salarioBase-impostoRenda))