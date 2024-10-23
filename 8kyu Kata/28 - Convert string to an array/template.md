# 8kyu - Convert a string to an array


## Description
```js
/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
```

**Link:** https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/

## My Solution

```js
function stringToArray(string){
return string.split(' ')
}
```

or 
```js
const stringToArray = string => string.split(' ')
```