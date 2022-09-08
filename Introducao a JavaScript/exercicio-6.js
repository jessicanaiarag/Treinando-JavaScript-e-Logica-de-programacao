let pecaXadrez = 'cavalo';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Se movimenta em qualquer direção, mas apenas de casa em casa.');
    break;
  case 'rainha':
    console.log('Tem livre movimentação no jogo na horizontal,vertical e diagonais.');
    break; 
  case 'torre':
    console.log('Corre sem restrição de número de casas e em todas as direções.');
    break;  
  case 'bispo':
    console.log('Sem restrição de número de casas, mas somente no sentido diagonal.');
     break;
  case 'cavalo':
    console.log('Realiza movimentos em “L”.');
    break;
  case 'peao':
    console.log('Pode apenas realizar movimentos frontais.');
    break;         
  default: console.log('não se aplica');
  }  

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos 
// que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com 
// letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de 
// condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
// letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)