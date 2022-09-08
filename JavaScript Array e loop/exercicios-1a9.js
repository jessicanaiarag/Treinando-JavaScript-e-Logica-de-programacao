let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]); 
};

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
};
console.log(soma); 

let numbersLength = 0;
for (let i = 0; i < numbers.length; i += 1) {
  numbersLength += 1;
};
console.log(numbersLength); 

let mediaNumbers = soma / numbersLength;
console.log(mediaNumbers);

if (mediaNumbers > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
};

let LargerNumber = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > LargerNumber) {
    LargerNumber = numbers[i];
  }
};
console.log(LargerNumber);  

let oddNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {   
  if (numbers[i] % 2 == 1) {
    oddNumbers.push(numbers[i]);
  }  
};

if (oddNumbers.length <= 0) {
console.log('nenhum valor ímpar encontrado');
} else {
  console.log(oddNumbers);
};

let smallerNumbers = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < smallerNumbers) {
    smallerNumbers = numbers[i];
  }
};
console.log(smallerNumbers);  

let array25 = [];
for (let i = 0; i < 25; i += 1) {
  array25.push(i);
};
console.log(array25);

for (let i = 0; i < array25.length; i += 1) {
  console.log(array25[i] / 2);
};  

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele 
// contidos com a função console.log();
// Para o segundo exercício, some todos os valores contidos no array e imprima o 
// resultado;
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos
// no array; A média aritmética é o resultado da soma de todos os elementos divido pelo 
// número total de elementos.
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
// "valor menor ou igual a 20";
// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de 
// cada um dos elementos por 2.