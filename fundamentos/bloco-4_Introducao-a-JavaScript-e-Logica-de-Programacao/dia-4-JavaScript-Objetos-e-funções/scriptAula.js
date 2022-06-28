// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals :{ 
//         golden: 2, 
//         silver: 3,
//     },
// };
// console.log('A jogadora',player.name,player.lastName,'tem',player.age,'anos de idade.')
// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log('A jogadora',player.name,player.lastName,'foi eleita a melhor do mundo por',player.bestInTheWorld.length,"vezes")
// console.log('A jogadora possui',player.medals.golden,'medalhas de ouro e',player.medals.silver,'medalhas de prata')
// EXERCICIOS DE    for/in  & for/of
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
// for (person in names){
//     console.log('olá',names[person])
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
// for (attributes in car){
//     console.log(attributes,car[attributes])
// }

//Exercicio 1 refeito
// function aritimetica(a,b,comando){
//     switch (comando){
//         case 'Adicao':
//             console.log('A Adicao de',a,'+',b,'=',a+b);
//             break;
//         case 'Subtracao':
//             console.log('A Subtracao de',a,'-',b,'=',a-b);
//             break;
//         case 'Multiplicacao':
//             console.log('A Multiplicacao de',a,'x',b,'=',a*b);
//             break;
//         case 'Divisao':
//             console.log('A Divisao de',a,'/',b,'=',a/b);
//             break;
//         case 'Modulo':
//             console.log('A Modulo de',a,'/',b,'=',a%b);
//             break;
//         default:
//             console.log('O Comando nao e suportado')
//             break;
//     };

// }
// aritimetica(4,2,'Multiplicacao')
//Exercicio 2
// function maior(a,b){
//     resultado = 'falha'
//     if (a == b){
//         resultado = 'O número ' + a+' e igual a '+b;
//     }else{
//         if (a > b ){
//             resultado = 'O número ' + a+' e maior que a '+b;
//         }else{
//             resultado = 'O número ' + a+' e menor que a '+b;
//         }
//     }
//     return resultado;
// }
// console.log(maior(2,2));
// Exercicio 3
// function maior (a,b,c){
//     resultado = 'falha';
//     if (a > b){
//         if(a > c){
//             resultado = "O maior número é " + a;
//         }else{
//             resultado = "O maior número é " + c;
//         }
//     }else{
//         if (b > c){
//             resultado = "O maior número é " + b;
//         }else{
//             resultado = "O maior número é " + c;
//         }
//     }
//     return resultado;
// }

// console.log(maior(10,2,7));
//Exercicio 4 
//  function sinal (a){
//     resultado = 'falha';
//     if (a === 0){
//         resultado = 'Zero';
//     }else if(a > 0){
//         resultado = 'Positive';
//     }else{
//         resultado = 'Negative';
//     }
//     return resultado;
//  }
// console.log(sinal(1))
//Exercicio 5 
