const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    const [alunos, medias] = listaDeAlunosEMedias;

    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João"); // João tem a média 10
exibeNomeENota("Juliana"); // Juliana tem a média 8
exibeNomeENota("Ana"); // Ana tem a média 7.5
exibeNomeENota("Caio"); // Caio tem a média 9
exibeNomeENota("Evaldo"); // Aluno não encontrado!