# 8kyu - Remove duplicates from list

## Description
```js
/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/
```

**Link:** https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/

## My Solution
```js
function distinct(a) {
    return [...new Set(a)] //will remove all duplicates from our array, but does not modify the order in which they appear
}
```