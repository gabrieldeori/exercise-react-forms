export function noSpecialChar(stringChange) {
  stringChange = stringChange.replace(/[áàãâä]/ui, 'a');
  stringChange = stringChange.replace(/[éèêë]/ui, 'e');
  stringChange = stringChange.replace(/[íìîï]/ui, 'i');
  stringChange = stringChange.replace(/[óòõôö]/ui, 'o');
  stringChange = stringChange.replace(/[úùûü]/ui, 'u');
  stringChange = stringChange.replace(/[ç]/ui, 'c');
  stringChange = stringChange.replace(/[_]/, ' ');
  stringChange = stringChange.replace(/[+]/, ' ');
  return stringChange;
}

export function cpfMask(value) {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export function checkEmail(email){
  return /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/.test(email);
}
