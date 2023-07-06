// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// // Contagem: 3 5 7 9 Acabou!

let primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
let ultimoValor = parseInt(prompt('Digite o ultimo valor: '))
let incremento = parseInt(prompt('Digite o incremento: '))
document.write("Contagem: ");

for(let i = primeiroValor; i <= ultimoValor; i += incremento){
    document.write(i + ' ')
}   
document.write(' Acabou o for!')