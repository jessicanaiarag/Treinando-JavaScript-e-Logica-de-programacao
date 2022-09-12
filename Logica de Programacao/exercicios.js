// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, 
// exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial10 = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 ;
console.log(fatorial10) ;

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por 
// exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string 
// abaixo como exemplo, depois troque por outras para verificar se seu 
// algoritmo está funcionando corretamente.

// let word = 'tryber';

// for (let i = word.length -1; i >= 0; i -= 1) {
//   console.log(word[index]);
// }

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// outra solução possivel.

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro 
// que retorne a menor. Considere o número de caracteres de cada palavra.

let maiorPalavra = '';

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  };  
}
console.log(maiorPalavra);

let menorPalavra = array;

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  };  
}
console.log(menorPalavra);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois 
// divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um
// algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);