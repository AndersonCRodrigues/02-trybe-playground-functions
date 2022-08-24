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
