/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

//solution: use if else, checking if the number mod 2 is equal to 0, return number * 8, and number * 9 if otherwise

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else{
      return number * 9;
    }
}