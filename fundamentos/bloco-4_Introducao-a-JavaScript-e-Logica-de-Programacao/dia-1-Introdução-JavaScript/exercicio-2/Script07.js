let nota = 101
if (nota > -1 && nota < 101){
    if (nota < 50){
        console.log(nota,"equivale a um F")
    }else if (nota < 60){
        console.log(nota,"equivale a um E")
    }else if (nota < 70){
        console.log(nota,"equivale a um D")
    }else if (nota < 80){
        console.log(nota,"equivale a um C")
    }else if (nota < 90){
        console.log(nota,"equivale a um B")
    }else{
        console.log(nota,"equivale a um A")
    }
}else{
    console.log(nota,"nota fora dos limites de 0 a 100")
}
