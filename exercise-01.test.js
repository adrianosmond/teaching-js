const mockConsole = jest.fn();
console.log = mockConsole;

const exercise01 = require('./exercise-01');

describe('Exercise 1', function() {
  test('outputs "I like programming" first', () => {
    expect(mockConsole.mock.calls[0][0]).toBe("I like programming");
  });
  
  test('outputs 10', () => {
    expect(mockConsole.mock.calls[1][0]).toBe(10);
  });
  
  test('outputs Pi to 5 d.p.', () => {
    expect(mockConsole.mock.calls[2].length).toBe(2);
    expect(mockConsole.mock.calls[2][0]).toBe("Pi is");
    expect(mockConsole.mock.calls[2][1]).toBe(3.14159);
  });
  
  test('outputs to the console 3 times', () => {
    expect(mockConsole.mock.calls.length).toBe(3);
  });
})