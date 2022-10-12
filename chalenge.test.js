const { italic } = require('ansi-colors');
const {stringLength, reverseString, Calculator, capitaliseString} = require("./chalenge.js");

// Task 1 before modification/ be4 string reversal
  test('Testing for length less than 1', () => {
    expect(() => {stringLength('')}).toThrow(Error)});
  
  test('Testing for string length greater than 10', () => {
    expect(() => {stringLength('I love my Mother')}).toThrow(Error)});
  
  test('Return correct string length', () => {
    let str = stringLength('Uganda')
    expect(str).toBe(6);
  });

  //Task 2 Modified
  test('Reverse input string', () => {
    let str =reverseString('Kenneth')
    expect(str).toBe('htenneK');
  });

  // Task 3 Calculator
  describe('Additon, Division, Subtraction, Multiplication', () => {
    test('Add two numbers', () => {
      expect(Calculator.add(4, 6)).toBe(10);
    });
    test('Subtract two numbers', () => {
      expect(Calculator.subtract(15, 30)).toBe(-15);
    });

    test('Divide two numbers', () => {
      expect(Calculator.divide(6, 3)).toBe(2);
    });
    test("should multiply two numbers", () => {
      expect(Calculator.multiply(4, 100)).toBe(400);
    });
  });

   // Task 4: Capitalise first Char of string function test
  test('Capitalize first Char of string', () => {
    expect(capitaliseString('home')).toBe('Home');
  });
