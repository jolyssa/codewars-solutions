# 8kyu - Convert number to reversed array of digits


## Description
```js
/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/
```

**Link:** https://www.codewars.com/kata/5583090cbe83f4fd8c000051/

## My Solution
### Refactoring in Steps

1. First, I divided this function into two separate variables, like so.

```js
function digitize(n){
    let arr = n.toString().split('')
    let nums = arr.map(Number).reverse()
    return nums    
}
```

2. Then made it into one long list of array methods.

```js
function digitize(n){
  return n.toString().split('').map(Number).reverse()
}
```