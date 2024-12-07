# 7kyu - Greet Me

## Description
```js
/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
```

**Link:** https://www.codewars.com/kata/535474308bb336c9980006f2/javascript

## My Solution
```js
var greet = function(name) {
  return `Hello ${name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase()}!`
}
```
