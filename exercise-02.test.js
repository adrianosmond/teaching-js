const mockConsole = jest.fn();
console.log = mockConsole;

const exercise02 = require('./exercise-02');

describe('Exercise 2', function() {
  test('x is defined correctly', function() {
    expect(exercise02.x).toBeDefined();
    expect(exercise02.x).toBe(12);
  });

  test('y is defined correctly', function() {
    expect(exercise02.y).toBeDefined();
    expect(exercise02.y).toBe(6);
  });

  test('sum is defined correctly', function() {
    expect(exercise02.sum).toBeDefined();
    expect(exercise02.sum).toBe(18);
  });

  test('outputs sum', () => {
    expect(mockConsole.mock.calls[0][0]).toBe(18);
  });

  test('difference is defined correctly', function() {
    expect(exercise02.difference).toBeDefined();
    expect(exercise02.difference).toBe(6);
  });
  
  test('outputs difference', () => {
    expect(mockConsole.mock.calls[1][0]).toBe(6);
  });
  
  test('product is defined correctly', function() {
    expect(exercise02.product).toBeDefined();
    expect(exercise02.product).toBe(72);
  });
  
  test('outputs product', () => {
    expect(mockConsole.mock.calls[2][0]).toBe(72);
  });

  test('quotient is defined correctly', function() {
    expect(exercise02.quotient).toBeDefined();
    expect(exercise02.quotient).toBe(2);
  });
  
  test('outputs quotient', () => {
    expect(mockConsole.mock.calls[3][0]).toBe(2);
  });
  
  test('outputs to the console 4 times', () => {
    expect(mockConsole.mock.calls.length).toBe(4);
  });
})