const mockConsole = jest.fn();
console.log = mockConsole;

const exercise09 = require('./exercise-09');

describe('Exercise 9', function() {
  test('powerOf is defined correctly', function() {
    expect(exercise09.powerOf).toBeDefined();
  });

  test('powerOf takes 2 numbers as parameters', function() {
    expect(exercise09.powerOf.length).toBe(2);
  });
  
  test('powerOf works to the power of 0', function() {
    expect(exercise09.powerOf(2, 0)).toBe(1);
    expect(exercise09.powerOf(6, 0)).toBe(1);
    expect(exercise09.powerOf(100, 0)).toBe(1);
  });
  
  test('powerOf works to the power of 1', function() {
    expect(exercise09.powerOf(2, 1)).toBe(2);
    expect(exercise09.powerOf(6, 1)).toBe(6);
    expect(exercise09.powerOf(100, 1)).toBe(100);
  });
  
  test('powerOf works to the power of 2', function() {
    expect(exercise09.powerOf(2, 2)).toBe(4);
    expect(exercise09.powerOf(6, 2)).toBe(36);
    expect(exercise09.powerOf(100, 2)).toBe(10000);
  });
  
  test('powerOf works to the power of 5', function() {
    expect(exercise09.powerOf(2, 5)).toBe(32);
    expect(exercise09.powerOf(6, 5)).toBe(7776);
    expect(exercise09.powerOf(100, 5)).toBe(10000000000);
  });
  
  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})