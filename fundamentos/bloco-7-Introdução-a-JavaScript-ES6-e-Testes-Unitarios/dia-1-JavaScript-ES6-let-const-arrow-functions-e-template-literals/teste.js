const id = 2 // fora do escopo  

const link = nariz => ({'raca': 'elfo', 'nariz': nariz, 'id': id}); // função arrow function

console.log(link('cao')); // fora da function