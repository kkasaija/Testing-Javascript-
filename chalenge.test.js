const { italic } = require('ansi-colors');
const {stringLength} = require("./chalenge.js");

  test('Testing for length less than 1', () => {
    expect(() => {stringLength('')}).toThrow(Error)});
  
  test('Testing for string length greater than 10', () => {
    expect(() => {stringLength('I love my Mother')}).toThrow(Error)});
  
  test('Return string length', () => {
    let str = stringLength('')
    expect(str).toBe(6);
  });
