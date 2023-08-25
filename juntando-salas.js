const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas); // [ 'Evaldo', 'Camis', 'Mari', 'Ju', 'Leo', 'Raquel' ]

console.log(salaPython.concat(salaJS)); // [ 'Ju', 'Leo', 'Raquel', 'Evaldo', 'Camis', 'Mari' ]