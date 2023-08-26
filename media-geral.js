const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    return notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0) / notasDaSala.length;
}

function apresentacao(sala, notas) {
    console.log(`A média da sala de ${sala} é ${calculaMedia(notas)}`);
}

apresentacao('Javascript', salaJS); // A média da sala de Javascript é 7.5
apresentacao('Java', salaJava); // A média da sala de Java é 6.5
apresentacao('Python', salaPython); // A média da sala de Python é 7