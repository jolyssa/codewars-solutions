# 8kyu - Thinkful - Logic Drills: Traffic light


## Description
```js
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
```

**Link:** https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/solutions/

## My Solution

```js
function removeEveryOther(arr){
  return arr.filter((el, i) => i % 2 === 0);
}
```