# 8kyu - Basic variables

## Description
`/* 
This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a == "code";
var b == "wa.rs";
var name == a + b;
*/`

**Link:** https://www.codewars.com/kata/50ee6b0bdeab583673000025

## My Solution
`//Simply remove an equal sign so it is now variable assignment, not comparison`
```js
var a = "code";
var b = "wa.rs";
var name = a + b;

console.log(name)
```
