// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.


// let = idade = 0;
// let = contadorIdade = 0;
// let = numeroAlunos = 0;


// while (idade != 999){
//   idade = parseint(prompt("Digite a idade do aluno:"))

// if(idade != 999){
//   contadoridade + idade;
//   numeroAlunos++
// }
// }

let idade = 0
    let contador = 0
    let idadeTotal = 0
    let media = 0

    while(true){
        idade = parseInt(prompt('digite aqui a idade (ou digite 999 para sair): '))
        idadeTotal += idade
        contador++
        
        if(idade == 999){
            contador--
            idadeTotal-= 999
            media = idadeTotal/contador
            break
        }
    }
    document.write('Total de idade:' + idadeTotal +'<br>')
    document.write('Quantidade de alunos:' + contador +'<br>')
    document.write('Média de idade:' + media +'<br>')

