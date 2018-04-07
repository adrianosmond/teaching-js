const mockConsole = jest.fn();
console.log = mockConsole;

const exercise03 = require('./exercise-03');

describe('Exercise 3', function() {
  test('sum is defined correctly', function() {
    expect(exercise03.sum).toBeDefined();
  });

  test('sum takes 2 numbers as parameters', function() {
    expect(exercise03.sum.length).toBe(2);
  });
  
  test('sum works', function() {
    expect(exercise03.sum(1, 2)).toBe(3);
    expect(exercise03.sum(1, -1)).toBe(0);
    expect(exercise03.sum(4, 6)).toBe(10);
    expect(exercise03.sum(100, 100)).toBe(200);
  });

  test('difference is defined correctly', function() {
    expect(exercise03.difference).toBeDefined();
  });

  test('difference takes 2 numbers as parameters', function() {
    expect(exercise03.difference.length).toBe(2);
  });
  
  test('difference works', function() {
    expect(exercise03.difference(10, 8)).toBe(2);
    expect(exercise03.difference(10, 10)).toBe(0);
    expect(exercise03.difference(10, -10)).toBe(20);
    expect(exercise03.difference(10, 20)).toBe(-10);
  });
    
  test('product is defined correctly', function() {
    expect(exercise03.product).toBeDefined();
  });

  test('product takes 2 numbers as parameters', function() {
    expect(exercise03.product.length).toBe(2);
  });
  
  test('product works', function() {
    expect(exercise03.product(1, 1)).toBe(1);
    expect(exercise03.product(1, -1)).toBe(-1);
    expect(exercise03.product(-1, -1)).toBe(1);
    expect(exercise03.product(10, 5)).toBe(50);
  });
  
  test('quotient is defined correctly', function() {
    expect(exercise03.quotient).toBeDefined();
  });

  test('quotient takes 2 numbers as parameters', function() {
    expect(exercise03.quotient.length).toBe(2);
  });
  
  test('quotient works', function() {
    expect(exercise03.quotient(1, 1)).toBe(1);
    expect(exercise03.quotient(10, 2)).toBe(5);
    expect(exercise03.quotient(3, 2)).toBe(1.5);
    expect(exercise03.quotient(-3, 2)).toBe(-1.5);
  });
    
  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})