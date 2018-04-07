/**
 * EXERCISE 09 :: LOOPS AND ARRAYS
 * 
 * Now we're going try combining loops and arrays.
 * 
 * This time your task is to write a function called arraySum which receives an
 * array of numbers as a parameter and should return the sum of the numbers
 * in that array. so arraySum([1,2,3]) should return 6, arraySum([2,2,2,2])
 * should return 8 and arraySum([]) should return 0.
 * 
 * I've written the first and last lines of the function for you. You just
 * have to do the rest!
 * 
 * 👇 Write code in the function below 👇
 **/

function arraySum(numbers) {
  var sum = 0

  //Your code goes here!

  return sum
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
  arraySum: typeof(arraySum) !== "undefined" ? arraySum : undefined,
};