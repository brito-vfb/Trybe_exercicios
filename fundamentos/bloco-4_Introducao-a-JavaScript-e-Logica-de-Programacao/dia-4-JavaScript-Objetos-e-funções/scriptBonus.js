// I pode ter aos lados lado direito - > I, V, X
// se o primeiro caracter for X - segundo pode ser X
    // o terceiro pode ser X 
        // quarto/quinto pode ser I -> IX
    // o terceiro/quarto pode ser I -> IX
// se o primeiro caracter for X - segundo pode ser L
// se o primeiro caracter for X - segundo pode ser C
function identify (word){
    arrayWord = word.split('')
    return arrayWord
}

console.table(identify('IXIV'))