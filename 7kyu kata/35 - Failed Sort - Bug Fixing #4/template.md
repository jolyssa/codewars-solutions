# 7kyu -  Failed Sort - Bug Fixing #4

## Description
```js
/*
Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
*/
```

**Link:** https://www.codewars.com/kata/55c7f90ac8025ebee1000062/javascript

## My Solution
```js
const sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('')
}
```