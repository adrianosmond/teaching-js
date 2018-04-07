const mockConsole = jest.fn();
console.log = mockConsole;

const exercise09 = require('./exercise-09');

describe('Exercise 9', function() {
  test('arraySum is defined correctly', function() {
    expect(exercise09.arraySum).toBeDefined();
  });

  test('arraySum takes 1 number as a parameter', function() {
    expect(exercise09.arraySum.length).toBe(1);
  });
  
  test('arraySum works with an empty array', function() {
    expect(exercise09.arraySum([])).toBe(0);
  });
  
  test('arraySum works with 1 number', function() {
    expect(exercise09.arraySum([1])).toBe(1);
  });
  
  test('arraySum works with several numbers', function() {
    expect(exercise09.arraySum([1,2,3,4,5,6,7,8,9,10])).toBe(55);
  });
  
  test('arraySum works with negative numbers', function() {
    expect(exercise09.arraySum([-1,-2,-3])).toBe(-6);
  });
  
  test('arraySum works with zeros', function() {
    expect(exercise09.arraySum([0, 0, 0, 0])).toBe(0);
  });
})