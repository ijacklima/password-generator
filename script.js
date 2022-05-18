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
  pwE.innerText = password;
}



