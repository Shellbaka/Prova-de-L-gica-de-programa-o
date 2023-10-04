let maior = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;

let turma = prompt('Qual o nome da turma?');
let numeroDeMaterias = parseInt(prompt('Quantas matérias essa turma cursa?'));
let mediasAlunos = [];

for (let i = 0; i < numeroDeMaterias; i++) {
    let materia = prompt("Digite o nome da matéria " + (i + 1));
    let alunosQuant = parseInt(prompt("Quantos alunos têm na matéria " + materia + "?"));
    let alunosAprovados = [];
    let alunosReprovados = [];
    let alunosFinal = [];
  
    for (let j = 0; j < alunosQuant; j++) {
        let nota1 = parseFloat(prompt(`Digite a primeira nota do aluno ${j + 1} na disciplina ${materia}`));
        let nota2 = parseFloat(prompt(`Digite a segunda nota do aluno ${j + 1} na disciplina ${materia}`));
        let media = (nota1 + nota2) / 2;

        console.log(`A média do aluno ${j + 1} na disciplina ${materia} foi: ${media}`);
        mediasAlunos.push(media);

        if (media >= 7) {
            console.log(`O aluno ${j + 1} foi aprovado`);
            alunosAprovados.push('1');
        } else if (media >= 4) {
            console.log(`O aluno ${j + 1} está na final`);
            alunosFinal.push('1');
        } else {
            console.log(`O aluno ${j + 1} foi reprovado`);
            alunosReprovados.push('1');
        }

        if (maior < media) {
            maior = media;
        } else if (menor > media) {
            menor = media;
        }
    }

    let mediaMateria = mediasAlunos.reduce((acc, curr) => acc + curr, 0) / mediasAlunos.length;

    console.log('#### RESUMO DA DISCIPLINA ####');
    console.log('DISCIPLINA: ' + materia);
    console.log('QTD TOTAL DE ALUNOS: ', alunosQuant);
    console.log('MÉDIA GERAL DA DISCIPLINA: ', mediaMateria.toFixed(2));
    console.log('MAIOR MÉDIA DA DISCIPLINA: ', maior.toFixed(2));
    console.log('MENOR MÉDIA DA DISCIPLINA: ', menor.toFixed(2));
    console.log('QTD ALUNOS REPROVADOS: ', alunosReprovados.length);
    console.log('QTD ALUNOS NA FINAL: ', alunosFinal.length);
    console.log('QTD ALUNOS APROVADOS: ', alunosAprovados.length);
    console.log(' ');
}

let mediaFinal = mediasAlunos.reduce((acc, curr) => acc + curr, 0) / mediasAlunos.length;

console.log('#### RESUMO DA TURMA ####');
console.log('TURMA: ', turma);
console.log('QTD DE DISCIPLINAS: ', numeroDeMaterias);
console.log('MÉDIA GERAL DA TURMA: ', mediaFinal.toFixed(2));
