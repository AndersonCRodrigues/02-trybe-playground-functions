// Desafio 1
function compareTrue(x, y) {
  return x && y;
}

// Desafio 2
function calcArea(x, y) {
  return (x * y) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4
function concatName(vetor) {
  return `${vetor[vetor.length - 1]}, ${vetor[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function conta(vetor, k) {
  let contador = 0;
  for (let i = 0; i < vetor.length; i += 1) {
    if (k === vetor[i]) contador += 1;
  }
  return contador;
}

function highestCount(vetor) {
  let auxiliar = vetor[0];
  for (let i = 0; i < vetor.length; i += 1) {
    if (auxiliar < vetor[i]) auxiliar = vetor[i];
  }
  return conta(vetor, auxiliar);
}

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  let dist1 = Math.abs(Math.abs(gato1) - Math.abs(rato));
  let dist2 = Math.abs(Math.abs(gato2) - Math.abs(rato));
  if (dist1 < dist2) return 'cat1';
  if (dist1 > dist2) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function identifica(n) {
  if ((n % 3 === 0) && (n % 5 === 0)) return 'fizzBuzz';
  if (n % 3 === 0) return 'fizz';
  if (n % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(vetor) {
  let frase = [];
  for (let i = 0; i < vetor.length; i += 1) {
    frase.push(identifica(vetor[i]));
  }
  return frase;
}

// Desafio 9
let codigo = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

function codifica(caracter) {
  for (let key in codigo) {
    if (caracter === codigo[key]) return key;
  }
  return caracter;
}

function encode(frase) {
  let novaFrase = '';
  for (let i = 0; i < frase.length; i += 1) {
    novaFrase += `${codifica(frase[i])}`;
  }
  return novaFrase;
}

//console.log(encode('hi there!'));

function decodifica(caracter) {
  for (let key in codigo) {
    if (caracter === key) return codigo[key];
  }
  return caracter;
}

function decode(frase) {
  let novaFrase = '';
  for (let i = 0; i < frase.length; i += 1) {
    novaFrase += `${decodifica(frase[i])}`;
  }
  return novaFrase;
}

console.log(decode('h3 th2r2!'));

// Desafio 10
function techList() {
  // seu código aqui
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
  techList,
};
