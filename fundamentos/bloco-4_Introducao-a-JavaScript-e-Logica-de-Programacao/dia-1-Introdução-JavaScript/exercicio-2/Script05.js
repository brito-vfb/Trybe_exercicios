const angA = 120;
const angB = 40;
const angC = 20;

if( angA < 0 || angB < 0 || angC < 0){
    console.log("Existe um angulo inválido");
}else{
    let soma = angA + angB + angC;
    if (soma == 180){
        console.log(true);
    }else{
        console.log(false);
    }
}