# 8kyu - Sum Mixed Array


## Description
```js
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
```

**Link:** https://www.codewars.com/kata/57eaeb9578748ff92a000009/
## My Solution

```js
function sumMix(x){
  let nums = x.reduce((sum,num) => sum + +num, 0)

  return nums
}

//turns into
function sumMix(x){
  return x.reduce((sum,num) => sum + +num, 0)
}

//or

const sumMix = x => x.reduce((sum,num) => sum + +num, 0)

```