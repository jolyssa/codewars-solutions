# 7kyu - Find the capitals


## Description
```js
/*
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
```

**Link:** https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript

## My Solution
```js
var capitals = function (word) {
    return word.split('').map((w, ind) => {
      if (w === w.toUpperCase()){
        return ind
      }
    }).filter(w => w !== undefined)  
}
```