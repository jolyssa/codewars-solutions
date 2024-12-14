# 7kyu - Alternate capitalization

## Description
```js
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/
```

**Link:** https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript

## My Solution
```js
function capitalize(s){
  let even = s.split('').map((str,ind) => ind % 2 === 0 ? str.toUpperCase() : str ).join('')
  let odd = s.split('').map((str,ind) => ind % 2 === 0 ? str : str.toUpperCase()).join('')
  return [even, odd]
}
```