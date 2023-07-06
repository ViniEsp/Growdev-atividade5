// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let totMan = 0
let totFem = 0
let salario = 0
let continuar = ""
let sexo = ""

while(true){
    salario = parseFloat(prompt('digite o valor do salário: '))
    sexo = prompt("qual o sexo do funcionário? (M/F) :").toUpperCase()
    if(sexo == "M"){
        totMan += salario
    }
    else{
        totFem += salario
    }
    continuar = prompt('deseja continuar? (S/N)').toUpperCase()
    if(continuar == "N"){
        break
    }
}
console.log('feminino', totFem)
console.log('masculino', totMan)