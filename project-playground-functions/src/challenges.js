// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length - 1]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(array) {
  let largerNumber = array[0];
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (item > largerNumber) {
      largerNumber = item;
      count = 1;
    } else if (item === largerNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1dist = Math.abs(mouse - cat1);
  const cat2dist = Math.abs(mouse - cat2);
  if (cat1dist < cat2dist) {
    return 'cat1';
  } if (cat2dist < cat1dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0) {
      if (array[i] % 5 === 0) {
        result.push('fizzBuzz');
      } else {
        result.push('fizz');
      }
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case ('a'):
      result += 1;
      break;
    case ('e'):
      result += 2;
      break;
    case ('i'):
      result += 3;
      break;
    case ('o'):
      result += 4;
      break;
    case ('u'):
      result += 5;
      break;
    default:
      result += string[i];
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case ('1'):
      result += 'a';
      break;
    case ('2'):
      result += 'e';
      break;
    case ('3'):
      result += 'i';
      break;
    case ('4'):
      result += 'o';
      break;
    case ('5'):
      result += 'u';
      break;
    default:
      result += string[i];
    }
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
