# 8kyu - If you can't sleep, just count sheep!! 


## Description
```js
/*
If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
```

**Link:** https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/javascript

## My Solution
```js
function countSheep (num){
  let count = "";
  for (let i = 1; i <= num; i++) {
    count += `${i} sheep...`;
  }
  return count;
}
```