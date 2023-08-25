const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes); // [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]