# 8kyu - Array plus array

## Description
```js
/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
```

**Link:** https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/javascript

## My Solution
```js
function arrayPlusArray(arr1, arr2) {
  //sum all the elements in arr1
  let sumArrOne = arr1.reduce((sum, nums) => {
    return sum + nums
  }, 0)
  //sum all the elements in arr2
  let sumArrTwo = arr2.reduce((sum, nums) => {
    return sum + nums
  }, 0)
  //sum arr1 + arr2
  return sumArrOne + sumArrTwo
  //return the sum of all elements in the 2 arr
}

arrayPlusArray([5,2,1],[3,4,3,6]) //8 + 16 =  24

//or a shorter and easier version using .concat
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((sum, nums) => sum + nums)
}
```
