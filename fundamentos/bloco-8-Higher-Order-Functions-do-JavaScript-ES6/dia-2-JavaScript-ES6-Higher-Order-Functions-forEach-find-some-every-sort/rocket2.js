const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA(listNames) {
    return listNames.reduce((sum, currentName) => {
        let splitName = currentName.split('');
        sum += splitName.filter(letter => letter.toLowerCase() === 'a').length;
        return sum;
    },0);
}

console.log(containsA(names));