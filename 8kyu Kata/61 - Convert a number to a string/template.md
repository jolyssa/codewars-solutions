# 8kyu - Convert a Number to a String!

## Description
```js
/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/
```

**Link:** https://www.codewars.com/kata/5265326f5fda8eb1160004c8

## My Solution
```js
function numberToString(num) {
   num = num.toString()
  return num
}

//or
let numberToString = num => num.toString()
```