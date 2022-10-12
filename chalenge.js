// Task 1 before Modification/ be4 string reversal
function stringLength(string) {
  let leng = string.length; 
  if(leng < 1){
    throw new Error('Expected length to be greater than OR equal to 1')
  }else if(leng > 10){
    throw new Error('Expected length to be less than OR equal to 10')
  }else return leng;
}

//Task 1 Modified
function reverseString(string) {
  let reverseStr ='';
  for (let index = string.length - 1; index >= 0; index--) {
    reverseStr += string[index]; 
  }
  return reverseStr;
}

//Task 3 Calculator
class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }
  // Addition
  static add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
  }

    //Subtraction
  static subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
  }

    //Division
  static divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber
  }
  
    //Multiplication
  static multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
  }
}

// Task 4: Captalize first Char of string
function capitaliseString (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
module.exports = {stringLength, reverseString, Calculator, capitaliseString};