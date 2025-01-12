# 8kyu - Grasshopper - Function syntax debugging

## Description
```js
/*
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them
*/
```

**Link:** https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/javascript

## My Solution
```js
//from this
function main [verb, noun]
  return verb + noun
}

//to this
function main (verb, noun) {
  return verb + noun
}
```
