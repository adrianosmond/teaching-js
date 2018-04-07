/**
 * EXERCISE 05 :: CONDITIONALS
 * 
 * So far, everything we've done has been very definite but life is rarely so
 * certain. Often the answer to a question is different depending on some 
 * circumstances. In programming we can use conditionals to handle such cases.
 * Conditionals rely on a third data type. So far we've learned about strings
 * and numbers but conditionals use booleans, which are true or false:
 * https://www.javascript.com/learn/javascript/booleans
 * 
 * Conditionals in JavaScript are built around the if, else if and else
 * keywords: https://www.javascript.com/learn/javascript/conditionals
 * 
 * You might also need to read about logical and comparison operators here:
 * https://www.w3schools.com/js/js_comparisons.asp
 * 
 * This time I have given you an empty function called forecast, which takes
 * a parameter called temperature. The purpose of this function is to tell
 * a user what the weather is like based on the temperature that is passed
 * to it. Complete this function so that it returns a different string
 * depending on that temperature. If the temperature is less than 10, return
 * "It's cold", if the temperature is between 10 and 20, return "It's normal"
 * and if the temperature is more than 20, return "It's hot"
 * 
 * 👇 Write code in the function below 👇
 **/

function forecast(temperature) {

}

/**
 * 👆 Write code in the function above 👆
 * 
 * You can ignore stuff that happens below here. If you change it you'll probably
 * break the ability to test your code, so don't do it!
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

module.exports = {
  forecast: typeof(forecast) !== "undefined" ? forecast : undefined,
};