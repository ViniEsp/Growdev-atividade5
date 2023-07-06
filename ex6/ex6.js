// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

const largura = prompt ("Digite a largura do terreno:")
const comprimento = prompt("Digite o comprimento do terreno:")
const area = largura * comprimento


if(area < 100){
    document.write("O terreno é Popular")
}else if (area >=110 && area <= 500){
    document.write("O terreno é Master")
}else{
    document.write("O terreno é VIP")
}
