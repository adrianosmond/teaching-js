const mockConsole = jest.fn();
console.log = mockConsole;

const exercise08 = require('./exercise-08');

describe('Exercise 8', function() {
  test('loopingIsFun is defined correctly', function() {
    expect(exercise08.loopingIsFun).toBeDefined();
  });

  test('loopingIsFun takes 0 parameters', function() {
    expect(exercise08.loopingIsFun.length).toBe(0);
  });
  
  test('loopingIsFun runs console.log 1000 times with the right values', function() {
    exercise08.loopingIsFun();

    expect(mockConsole.mock.calls.length).toBe(1000);
    for (var i=0; i<1000; i++) {
      expect(mockConsole.mock.calls[i][0]).toBe(i + 1);
    }
  });
})