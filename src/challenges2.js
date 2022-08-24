// Desafio 11
function testaNumero(numeros) {
  for (let i = 0; i < numeros.length; i += 1) {
    if ((numeros[i] < 0) || (numeros[i] > 9)) return false;
  } return true;
}

function testaRepitido(vetor) {
  let contador = 0;
  for (let i = 0; i < vetor.length; i += 1) {
    for (let j = 0; j < vetor.length; j += 1) {
      if (vetor[i] === vetor[j]) contador += 1;
    }
    if (contador > 2) return false;
    contador = 0;
  }
  return true;
}

function geraNumero(vetor) {
  let padrao = '(xx) xxxxx-xxxx';
  let alterado = '';
  let len = 0;
  for (let i = 0; i < padrao.length; i += 1) {
    if (padrao[i] === 'x') {
      alterado += `${vetor[len]}`;
      len += 1;
    } else {
      alterado += `${padrao[i]}`;
    }
  }
  return alterado;
}

function generatePhoneNumber(vetor) {
  if (vetor.length !== 11) return 'Array com tamanho incorreto.';
  if ((!testaNumero(vetor)) || (!testaRepitido(vetor))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return geraNumero(vetor);
}
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
