const pwE = document.getElementById("pw");
const copyE = document.getElementById("copy");
const lenE = document.getElementById("len");
const upperE = document.getElementById("upper");
const lowerE = document.getElementById("lower");
const numberE = document.getElementById("number");
const symbolE = document.getElementById("symbol");
const generateE = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+="

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() *
    lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() *
    upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() *
    numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() *
    symbols.length)];
}

function generatePass() {
  const len = lenE.value;

  let password = "";

  if(upperE.checked) {
    password += getUpperCase();
  }

  if(lowerE.checked) {
    password += getLowerCase();
  }

  if(numberE.checked) {
    password += getNumber();
  }

  if(symbolE.checked) {
    password += getSymbols();
  }

  for(let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }
  pwE.innerText = password
}

function generateX() {
  const xr = [];

  if(upperE.checked) {
    xr.push(getUpperCase());
  }

  if(lowerE.checked) {
    xr.push(getLowerCase());
  }

  if(numberE.checked) {
    xr.push(getNumber());
  }

  if(symbolE.checked) {
    xr.push(getSymbols());
  }

  if(xr.length === 0) return "";

  return xr[Math.floor(Math.random() *
    xr.length)];
}

generateE.addEventListener("click", generatePass);

copyE.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = pwE.innerText;

  if(!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard");
});
