# 8kyu - Calculate BMI

## Description
```js
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
*/
```

**Link:** https://www.codewars.com/kata/57a429e253ba3381850000fb/

## My Solution

```js
function countBy(x, n) {
 let arr = []

  for (i = 1; i <= n; i++){
    arr.push(x*i)
    //ex (x=2,n=5)
    //x*i is being pushed to the array
    //2*1 = 2
    //2*2 = 4
    //2*3 = 6
    //2*4 = 8
    //2*5 = 10
    //Condition is met, i is less than or equal to 5, so the loop stops.
  }
  return arr
}
```