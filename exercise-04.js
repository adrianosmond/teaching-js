/**
 * EXERCISE 04 :: FUNCTIONS ii
 * 
 * No new techniques to learn this time, just a bit more practice with
 * functions. Actually, I will cover One more thing... 
 * 
 * You can pass almost anything in as a parameter to a function, including
 * another function, and you can do that as many times as you want. 
 * If you do that, it'll first work out what the inner function returns 
 * and then pass that value the outer function. I'll explain this
 * inception-like madness with an example that will hopefully clear up
 * what I'm talking aobut. You could do this if you wanted:
 * 
 * sum(1, sum(2, sum(3, 4)))
 * 
 * First the computer will deal with the innermost function, which is 
 * 
 * sum(3, 4)
 * 
 * That will return 7, so then it will get to work on the next function,
 * which is effectively now:
 * 
 * sum(2, 7)
 * 
 * That will return 9. so finally it can work on the outermost function:
 * 
 * sum(1, 9)
 * 
 * and that will return 10.
 * 
 * Hopefully this is kinda logical and not too mind blowing?!
 * 
 * Below I have created an empty function called squareAndSum. This
 * function takes a number as a parameter, and should return the sum of
 * the number and its square. So if the number was 3, it should return
 * 12, as 3 squared is 9 and if you add 3 to 9, you get 12.
 * 
 * You could write this like so:
 * 
 * return number + (number * number)
 * 
 * but lets reuse some code instead. In exercise 3 we made some functions,
 * including sum and product. I've imported them into this program for you,
 * so you can use the code you've already written to do the addition and
 * the multiplication. You're welcome!
 * 
 * 👇 Ignore the line beginning with const, that's me importing your code...
 *    Write code in the function below that line 👇
 **/

const { sum, product } = require("./exercise-03");

function squareAndSum(number) {

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
  squareAndSum: typeof(squareAndSum) !== "undefined" ? squareAndSum : undefined,
};