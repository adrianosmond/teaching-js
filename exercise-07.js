/**
 * EXERCISE 07 :: ARRAYS
 * 
 * Sometimes when programming you want to collect similar data together, and
 * up to this point we haven't seen a good way to do that. You could perhaps 
 * give things similar variable names, e.g.:
 * 
 * var colour1 = "Red"
 * var colour2 = "Green"
 * var colour3 = "Blue"
 * 
 * but this has problems. What if you decide Green isn't needed any more? Then
 * you have colour1 and colour3 but no colour2. What if you want to pass them
 * all into a function? this could be problematic if you had 10, let alone 100
 * or 1000 pieces of information in your collection. For this purpose we have
 * arrays: https://www.javascript.com/learn/javascript/arrays
 * 
 * We'll do more with arrays later, but for now we'll do something basic. Below
 * we have a function called arrays, which takes a variable called type as a
 * parameter. When I test the function, type will be either "string", "number"
 * or "boolean". If it's "string", return an array with the first 5 lower case
 * letters of the English alphabet. If it's "number", return an array with the
 * whole numbers from 1 to 5 in order. If it's "boolean", return an array with
 * true and false in it (be careful to make sure that they aren't strings)
 * 
 * 👇 Write code in the function below 👇
 **/

function arrays(type) {

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
  arrays: typeof(arrays) !== "undefined" ? arrays : undefined,
};