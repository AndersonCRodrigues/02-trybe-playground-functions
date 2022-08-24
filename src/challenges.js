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
function highestCount(vetor) {
  let auxiliar = vetor[0];
  let contador = 0;
  for (let i = 0; i < vetor.length; i += 1) {
    if (auxiliar < vetor[i]) auxiliar = vetor[i];
  }
  for (let i = 0; i < vetor.length; i += 1) {
    if (auxiliar === vetor[i]) contador += 1;
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
