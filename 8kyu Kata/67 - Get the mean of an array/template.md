# 8kyu - Get the mean of an array

## Description
```js
/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/
```

**Link:** https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript

## My Solution
```js
function getAverage(marks){
  let avg = marks.reduce((sum,num) => sum + num / marks.length, 0)
  return Math.floor(avg)
}

//or
function getAverage(marks){
  return Math.floor(marks.reduce((sum,num) => sum + num / marks.length, 0))
}
```
