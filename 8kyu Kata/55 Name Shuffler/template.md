# 8kyu - Name Shuffler

## Description
```js
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
```

**Link:** https://www.codewars.com/kata/559ac78160f0be07c200005a/

## My Solution
```js
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}
```
