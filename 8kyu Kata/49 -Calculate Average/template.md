# 8kyu - Calculate Average

## Description
```js
/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/
```

**Link:** https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

## My Solution
```js
function findAverage(array) {
   if (array.length >= 1) {
     return array.reduce((sum, num) => sum + num , 0) / array.length
  } else {
    return 0
  }
}

//or

function findAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  if (array.length >= 1){
  return sum / array.length;
    } else {
      return 0
    }
}
```
