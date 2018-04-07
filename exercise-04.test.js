const mockConsole = jest.fn();
console.log = mockConsole;

const exercise04 = require('./exercise-04');

describe('Exercise 4', function() {
  test('forecast is defined correctly', function() {
    expect(exercise04.forecast).toBeDefined();
  });

  test('forecast takes 1 number as a parameter', function() {
    expect(exercise04.forecast.length).toBe(1);
  });
  
  test('forecast works for low temperatures', function() {
    const lowTemperatures = [-100, -1, 0, 5, 7.5, 9, 9.9];

    lowTemperatures.forEach((temp) => {
      expect(exercise04.forecast(temp)).toBe("It's cold");
    })
  });
  
  test('forecast works for normal temperatures', function() {
    const normalTemperatures = [10, 11.1111, 14, 17, 19, 19.9];

    normalTemperatures.forEach((temp) => {
      expect(exercise04.forecast(temp)).toBe("It's normal");
    })
  });
  
  test('forecast works for high temperatures', function() {
    const highTemperatures = [20.1, 21, 30, 50, 100];

    highTemperatures.forEach((temp) => {
      expect(exercise04.forecast(temp)).toBe("It's hot");
    })
  });
    
  test('no console logs left behind!', () => {
    expect(mockConsole.mock.calls.length).toBe(0);
  });
})