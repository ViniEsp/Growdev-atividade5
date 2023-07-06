// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. 
//    
//Faça um programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let valorCompras = 0;
let desconto = 0;

const nome = prompt("Digite o nome:")
const sexo = prompt("Digite o sexo M = mulher e H = homem")
const totalCompras = prompt("Digite o valor da compra:")


if (sexo === "M") {
    desconto = valorCompras * 0.13;
  } else if (sexo=== "H") {
    desconto = valorCompras * 0.05; 
  }

const valorDesconto = valorCompras - desconto;

document.write("Cliente: " + nome);
document.write("Valor das compras: R$ " + valorCompras);
document.write("Desconto: R$ " + desconto);
document.write("Valor com desconto: R$ " + valorDesconto);