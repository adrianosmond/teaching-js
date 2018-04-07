const mockConsole = jest.fn();
console.log = mockConsole;

const exercise07 = require('./exercise-07');

describe('Exercise 7', function() {
  test('arrays is defined correctly', function() {
    expect(exercise07.arrays).toBeDefined();
  });

  test('arrays takes 1 string as a parameter', function() {
    expect(exercise07.arrays.length).toBe(1);
  });
  
  test('arrays works for "string"', function() {
    expect(exercise07.arrays("string")).toEqual(["a", "b", "c", "d", "e"]);
  });
  
  test('arrays works for "number"', function() {
    expect(exercise07.arrays("number")).toEqual([1,2,3,4,5]);
  });
  
  test('arrays works for "boolean"', function() {
    expect(exercise07.arrays("boolean")).toEqual([true, false]);
  });
    
  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})