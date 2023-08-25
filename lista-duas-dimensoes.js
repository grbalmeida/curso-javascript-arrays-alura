const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias); // [ [ 'João', 'Juliana', 'Caio', 'Ana' ], [ 10, 8, 7.5, 9 ] ]

console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]},
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`
); 
/*

A aluna da posição 1 da lista de alunos é: Juliana,
A nota dessa aluna é 8
*/