let a = 140;
let b = 10;
let c = -30;

let numberPositives = a > 0 && b > 0 && c > 0;

let suma = a + b + c;

if (numberPositives) {
  if (suma === 180) { 
    console.log('true');
  } else {
    console.log('false');
  }  
} else {
  console.log('erro')
}

// 🚀 Faça um programa que defina três variáveis com os valores dos três ângulos 
// internos de um triângulo. Retorne true se os ângulos representarem os ângulos 
// de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa 
// deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.