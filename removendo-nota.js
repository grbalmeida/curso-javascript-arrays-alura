const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas); // [ 10, 6, 8, 5.5 ]

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`À média é ${media}`);