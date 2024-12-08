# 7kyu - Failed Filter - Bug Fixing #3

## Description
```js
/*
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
*/
```

**Link:** https://www.codewars.com/kata/55c606e6babfc5b2c500007c/javascript

## My Solution
```js
let FilterNumbers = function(str) {
  return str.split('').filter(c => !Number(c >= 0) ).join('');
}
```