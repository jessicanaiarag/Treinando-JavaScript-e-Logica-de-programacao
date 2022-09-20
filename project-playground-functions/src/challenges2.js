// Desafio 10
function techList(array, name) {
  let arrayTechs = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    const techs = {
      tech: array[i],
      name,
    };
    arrayTechs.push(techs);
  }
  return arrayTechs;
}

// Desafio 11

// eslint-disable-next-line max-lines-per-function, complexity
function generatePhoneNumber(array) {
  const numbers = [];

  if (array.length !== 11) return 'Array com tamanho incorreto.';

  // eslint-disable-next-line guard-for-in
  for (let i in array) {
    let encontrado = null;
    for (let indexNumber in numbers) {
      if (array[i] === numbers[indexNumber].number) {
        encontrado = indexNumber;
        break;
      }
    } if (encontrado) {
      numbers[encontrado].count += 1;
    } else {
      const obj = {
        number: array[i],
        count: 1,
      };
      numbers.push(obj);
    }
  }
  for (let n of numbers) {
    if (n.count >= 3 || n.number > 9 || n.number < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  const ddd = `(${array[0]}${array[1]})`;
  const firstPart = ` ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const secondPart = `-${array[7]}${array[8]}${array[9]}${array[10]}`;

  return ddd + firstPart + secondPart;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const a = Math.abs(lineA);
  const b = Math.abs(lineB);
  const c = Math.abs(lineC);
  if (a >= b + c || a <= b - c) {
    return false;
  }
  if (b >= a + c || b <= a - c) {
    return false;
  }
  if (c >= b + a || c <= b - a) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  const regex = /\d+/g;
  let result = (string.match(regex));
  let soma = 0;
  for (let i = 0; i < result.length; i += 1) {
    soma += Number(result[i]);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

// hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
