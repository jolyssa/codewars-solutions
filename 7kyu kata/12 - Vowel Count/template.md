# 7kyu - Vowel Count

## Description
```js
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
```

**Link:** https://www.codewars.com/kata/54ff3102c1bad923760001f3

## My Solution
```js
function getCount(str) {
  let count = 0
  const vowels = ["a","e","i","o","u"]
  for (let char of str) {
    if (vowels.includes(char)) {
      count++ 
    }
  } 
  return count
}

//or
function getCount(str) {
  return str.split('').filter(vowel => 'aeiouAEIOU'.includes(vowel)).length
}
```
