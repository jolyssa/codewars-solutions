# 8kyu - Sum of positive

## Description
```js
/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/
```

**Link:** https://www.codewars.com/kata/5715eaedb436cf5606000381

## My Solution
```js
function positiveSum(arr) {
  
  const negatives = []
  
  let sum = 0

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      negatives.push(arr[i]);
    } else{
      sum += arr[i];
    }
  }

  console.log(negatives);

  return sum;
}

//or a much shorter version
function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((sum,num) => sum + num, 0)
}
```
