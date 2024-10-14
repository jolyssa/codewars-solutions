# 7kyu - String ends with?

## Description
```js
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
```

**Link:** https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

## My Solution
```js
function solution(str, ending){
  return str.endsWith(ending)
}
```

```js
//originally did a longer, more redundant code
function solution(str, ending){
  if (str.endsWith(ending)) {
    return true
  } else {
    return false
  }
}
```

