const mockConsole = jest.fn();
console.log = mockConsole;

const exercise11 = require('./exercise-11');

describe('Exercise 11', function() {
  test('fizzBuzz is defined correctly', function() {
    expect(exercise11.fizzBuzz).toBeDefined();
  });

  test('fizzBuzz takes 1 number as a parameter', function() {
    expect(exercise11.fizzBuzz.length).toBe(1);
  });
  
  test('fizzBuzz works with normal numbers', function() {
    expect(exercise11.fizzBuzz(1)).toBe(1);
    expect(exercise11.fizzBuzz(23)).toBe(23);
    expect(exercise11.fizzBuzz(52)).toBe(52);
  });
  
  test('fizzBuzz works with Fizz numbers', function() {
    expect(exercise11.fizzBuzz(3)).toBe("Fizz");
    expect(exercise11.fizzBuzz(6)).toBe("Fizz");
    expect(exercise11.fizzBuzz(9)).toBe("Fizz");
    expect(exercise11.fizzBuzz(12)).toBe("Fizz");
    expect(exercise11.fizzBuzz(3 * 7)).toBe("Fizz");
    expect(exercise11.fizzBuzz(3 * 101)).toBe("Fizz");
    expect(exercise11.fizzBuzz(3 * 191)).toBe("Fizz");
  });
  
  test('fizzBuzz works with Buzz numbers', function() {
    expect(exercise11.fizzBuzz(5)).toBe("Buzz");
    expect(exercise11.fizzBuzz(10)).toBe("Buzz");
    expect(exercise11.fizzBuzz(5 * 7)).toBe("Buzz");
    expect(exercise11.fizzBuzz(5 * 101)).toBe("Buzz");
    expect(exercise11.fizzBuzz(5 * 191)).toBe("Buzz");
  });

  test('fizzBuzz works with Fizz Buzz numbers', function() {
    expect(exercise11.fizzBuzz(15)).toBe("Fizz Buzz");
    expect(exercise11.fizzBuzz(30)).toBe("Fizz Buzz");
    expect(exercise11.fizzBuzz(45)).toBe("Fizz Buzz");
    expect(exercise11.fizzBuzz(15 * 7)).toBe("Fizz Buzz");
    expect(exercise11.fizzBuzz(15 * 101)).toBe("Fizz Buzz");
    expect(exercise11.fizzBuzz(15 * 191)).toBe("Fizz Buzz");
  });
})