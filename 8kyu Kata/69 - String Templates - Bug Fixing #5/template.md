# 8kyu - String Templates - Bug Fixing #5

## Description
```js
/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/
```

**Link:** https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/javascript

## My Solution
```js
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
```
