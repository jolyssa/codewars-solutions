# 8kyu - Third Angle of a Triangle

## Description
```js
/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/
```

**Link:** https://www.codewars.com/kata/5a023c426975981341000014/javascript

## My Solution
```js
function otherAngle(a, b) {
  return 180 - a - b
}

//or
const otherAngle = (a,b) => 180 - a - b
```
