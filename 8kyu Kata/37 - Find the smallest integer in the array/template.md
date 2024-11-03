# 8kyu - Find the smallest integer in the array

## Description
```js
/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
```

**Link:** https://www.codewars.com/kata/577a98a6ae28071780000989/

## My Solution

```js
function findSmallestInt(arr){
return Math.min(...arr)
}

//or

const findSmallestInt = arr => Math.min(...arr)
```