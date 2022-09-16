// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, 
// ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function verifyPalind(palavra) {
  for (index in palavra) {
   if (palavra[index] === palavra[(palavra.length - 1) - index]) {
    return true;
    }
    return false;
  } 
}   
 
console.log(verifyPalind('cafe'));
console.log(verifyPalind('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function largerNumber (array) {
  let numberLarger = 1;
  for (let indice in array) {
    if (array[indice] > array[numberLarger]){
      numberLarger = indice;
    }
  }  
  return numberLarger;
}

console.log(largerNumber([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.]

function smallerNumber (array) {
  let numberSmaller = 0;
  for (let indice in array) {
    if (array[indice] < array[numberSmaller]){
      numberSmaller = indice;
    }
  }  
  return numberSmaller;
}

console.log(smallerNumber([2, 3, 6, -7, 10, 1]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior 
// quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function largerName (array) {
  let nameLarger = 0;
  for (let indice in array) {
    if (array[indice].length > array[nameLarger].length){
      nameLarger = indice;
    }
  }  
  return nameLarger;
}

console.log(largerName(['Fernanda','José', 'Lucas', 'Nádia', 'Cairo', 'Joana']));

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais 
// se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function numberRepite(array) {
  const numbers = [];
  for (let number of array) {
    let encontrado = null;
    for (let index in numbers) {
      if (number === numbers[index].number) {
        encontrado = index;
        break;
      } 
    }
    if(encontrado) {
      numbers[encontrado].count += 1;
    } else {
      const obj = {
        number: number,
        count: 1,
      }
      numbers.push(obj);
    }
  };
  let maisApareceu = null;
  for (let number of numbers) {
    if (number.count > maisApareceu) {
      maisApareceu = number.number;
    }
  }
  return maisApareceu;
} 

console.log('Mais repetiu: ', numberRepite([2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 8, 8]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e 
// retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

const n = 3;
let soma = 0;

function somatorio(n) { 
  for (let i = 0; i <= n; i += 1) {
    soma += i;
  }
  return soma;
}  

console.log('Soma: ', somatorio(n));

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se 
// a string ending é o final da string word. Considere que a string ending sempre será 
// menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificaFimPalavra(string, stringEnd) {  
  string = string.split('');
  stringEnd = stringEnd.split('');
  let result = true;

  for (let i = 0; i < stringEnd.length; i += 1) {
    if (string[string.length - stringEnd.length + i] != stringEnd[i]) {
      result = false;
    }
  }
  return result;    
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('cafe', 'ca')); //true

// Uma outra forma de fazer esse exercício é transformar as strings em arrays com o 
// método split e depois revertê-los com o método reverse. Assim, comparamos em um loop 
// cada posição dos dois arrays e caso alguma seja diferente, retornamos false.

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false