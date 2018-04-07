const mockConsole = jest.fn();
console.log = mockConsole;

const exercise03 = require('./exercise-03');

jest.spyOn(exercise03, 'sum');
jest.spyOn(exercise03, 'product');

const exercise04 = require('./exercise-04');

describe('Exercise 4', function() {
  test('squareAndSum is defined correctly', function() {
    expect(exercise04.squareAndSum).toBeDefined();
  });

  test('squareAndSum takes 1 number as a parameter', function() {
    expect(exercise04.squareAndSum.length).toBe(1);
  });
  
  test('squareAndSum works', function() {
    expect(exercise04.squareAndSum(1)).toBe(2);
    expect(exercise04.squareAndSum(2)).toBe(6);
    expect(exercise04.squareAndSum(3)).toBe(12);
    expect(exercise04.squareAndSum(4)).toBe(20);
    expect(exercise04.squareAndSum(10)).toBe(110);
  });

  test('we used the code from exercise 03', function() {
    exercise03.sum.mockReset();
    exercise03.product.mockReset();
    exercise04.squareAndSum(1);
    expect(exercise03.sum.mock.calls.length).toBe(1);
    expect(exercise03.product.mock.calls.length).toBe(1);
  })
    
  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})