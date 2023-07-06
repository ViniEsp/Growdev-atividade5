// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.


let distancia = parseInt(prompt('Qual distância deseja percorrer em km?'))
let passagem = 0

if (distancia >= 200){
passagem = distancia* 0.45
} else{
passagem = (distancia * 0.50)

}

document.write(passagem)