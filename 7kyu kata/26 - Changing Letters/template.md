# 7kyu - Changing letters

## Description
```js
/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/
```

**Link:** https://www.codewars.com/kata/5831c204a31721e2ae000294/javascript

## My Solution
```js
function swap (string) {
  //aieouAIEOU
  let vowels = ['a', 'e', 'i', 'o', 'u']
  //capitalise all vowels, not including y
  return string.split('').map((str) => vowels.includes(str) ? str.toUpperCase() : str).join('')
}
```