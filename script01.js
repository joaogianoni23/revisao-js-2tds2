// Preciso verificar se a idade do aluno é maior que 7 anos

// Para alunos entre 8 a 12 anos: Infantil
// Para alunos entre 13 e 17 anos: Adolescentes
// Para alunos maiores de 18: Adulto

let idadeAluno = 7;

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("Aluno esta na categoria Infantil");
} else if (idadeAluno > 12 && idadeAluno <18) {
    console.log("Aluno esta na categoria Adolescente")
} else if (idadeAluno > 17) {
    console.log ("Aluno esta na categoria Adulto");
} else {
    console.log ("O aluno não pode se matricular!")
}