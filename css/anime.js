'use strict';

const COLUMNS    = 100;
const CHARACTERS = 50;

function getCharCode() {
  let code = Math.floor(Math.random() * 94 + 33);
  return (code === 64) ? 47 : code;
}

function getCharCodes() {
  return Array.from(
    new Array(CHARACTERS), () => {
      return String.fromCharCode(getCharCode());
    }
  );
}

function createCharCodes(drop) {
  let codes = getCharCodes(),
      size  = Math.floor(Math.random() * 13);
  
  if (size < 10) size = 25;
  else if (size < 12) size = 12;
  else size = 60;

  setCharCodes(drop, codes, size);
  return size;
}

function setCharCodes(column, codes, size) {
  codes.forEach((code, index) => {    
    let char = document.createElement('span');
    char.className = `char-${index} code-size-${size}`;
    char.textContent = code;
   
    column.appendChild(char);
  });
}

function createRain(container) {
  for (let i = 0; i < COLUMNS; i++) {
    let column = document.createElement('p'),
        size   = createCharCodes(column);

    column.className = `code-column column-size-${size} code-${i}`;
    container.appendChild(column);
  }
}

createRain(document.getElementById('matrix-code'));
