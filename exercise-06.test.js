const mockConsole = jest.fn();
console.log = mockConsole;

const exercise06 = require('./exercise-06');

describe('Exercise 6', function() {
  test('oddOrEven is defined correctly', function() {
    expect(exercise06.oddOrEven).toBeDefined();
  });

  test('oddOrEven takes 1 number as a parameter', function() {
    expect(exercise06.oddOrEven.length).toBe(1);
  });
  
  test('oddOrEven works for odd numbers', function() {
    const oddNumbers = [1,3,5,111,55555,-1,-999999];

    oddNumbers.forEach((number) => {
      expect(exercise06.oddOrEven(number)).toBe("Odd");
    })
  });
  
  test('oddOrEven works for even numbers', function() {
    const evenNumbers = [2,4,6,8,222,888888,-4,-24680];

    evenNumbers.forEach((number) => {
      expect(exercise06.oddOrEven(number)).toBe("Even");
    })
  });
    
  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})