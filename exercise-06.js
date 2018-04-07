/**
 * EXERCISE 06 :: REMAINDERS
 * 
 * We'll learn something small this time. If you think back to maths lessons in
 * school, hopefully you remember learning about remainders - a number that's
 * left over when one number is divided by another. For example, when you divide
 * 5 by 2, you get a remainder of 1, because 5 is 2 times 2 plus 1. The remainder
 * of dividing 6 by 2 is 0, as 6 is exactly 3 times 2. With me so far?
 * 
 * In JavaScript we have an operator, just like the +, -, * or / operators, which
 * can work this out for us. It's called the remainder operator and for some
 * reason it's the percent sign: %
 * 
 * So in JavaScript if you do:
 *
 * 5 % 2
 * 
 * you get 1
 * 
 * and if you do:
 * 
 * 6 % 2
 * 
 * you get 0
 * 
 * Fill in the function below, called oddOrEven, which takes a number as 
 * a parameter and returns a string depending on the number. If the
 * number is odd (1, 3, 5, ...) it should return "Odd". If the number is
 * even (2, 4, 6, ...) it should return "Even"
 * 
 * 👇 Write code in the function below 👇
 **/

function oddOrEven(number) {

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
  oddOrEven: typeof(oddOrEven) !== "undefined" ? oddOrEven : undefined,
};