# 8kyu - Beginner - Reduce but Grow

## Description
`Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24`

**Link:** https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

## My Solution
```js
function grow(x){
return x.reduce((sum,num) => sum * num)
}
```
