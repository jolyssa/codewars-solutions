# 8kyu - The 'if' function

## Description
```js
/*
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/
```

**Link:** https://www.codewars.com/kata/54147087d5c2ebe4f1000805/javascript

## My Solution
```js
function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}
```
