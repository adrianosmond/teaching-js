const mockConsole = jest.fn();
console.log = mockConsole;

const exercise10 = require('./exercise-10');

describe('Exercise 10', function() {
  test('arraySum is defined correctly', function() {
    expect(exercise10.arraySum).toBeDefined();
  });

  test('arraySum takes 1 number as a parameter', function() {
    expect(exercise10.arraySum.length).toBe(1);
  });
  
  test('arraySum works with an empty array', function() {
    expect(exercise10.arraySum([])).toBe(0);
  });
  
  test('arraySum works with 1 number', function() {
    expect(exercise10.arraySum([1])).toBe(1);
  });
  
  test('arraySum works with several numbers', function() {
    expect(exercise10.arraySum([1,2,3,4,5,6,7,8,9,10])).toBe(55);
  });
  
  test('arraySum works with negative numbers', function() {
    expect(exercise10.arraySum([-1,-2,-3])).toBe(-6);
  });
  
  test('arraySum works with zeros', function() {
    expect(exercise10.arraySum([0, 0, 0, 0])).toBe(0);
  });

  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})