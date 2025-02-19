# 8kyu - Well of Ideas - Easy Version


## Description
```js
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/
```

**Link:** https://www.codewars.com/kata/57f222ce69e09c3630000212/javascript

## My Solution
```js
function well(x){
  let good = x.filter(g => g === 'good').length
  
  if (good ===  1 || good ===  2) {
    return 'Publish!'
  } else if (good > 2){
    return 'I smell a series!'
  } else if (good === 0) {
    return 'Fail!'
  }
}
```