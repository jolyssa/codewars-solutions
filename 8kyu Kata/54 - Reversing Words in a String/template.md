# 8kyu - Reversing Words in a String

## Description
```js
/*
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/
```

**Link:** https://www.codewars.com/kata/57a55c8b72292d057b000594/javascript

## My Solution
```js
function reverse(string){
  return string.split(' ').reverse().join(' ').trim()
}
```
