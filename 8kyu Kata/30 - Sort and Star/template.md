# 8kyu - Sort and Star


## Description
```js
/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
```

**Link:** https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/

## My Solution
### Refactoring in Steps

1. First, I divided this function into two separate variables, like so.

```js
function twoSort(s) {
  let one = s.sort((a,b) => a.charCodeAt() - b.charCodeAt())
  console.log(one)
  let two = one.find((word, arr) => arr == 0).split('').join('***')
  // console.log(typeof two)
  console.log(two)
}

twoSort(['happy', 'birthday', 'to', 'you','Hey'])
twoSort(['zebra','what','it','is','hoe','apple','wassup'])
```


2. Then I realised I don't need anything in sort() - localeCompare, charCodeAt or otherwise. So I removed it so it would look like this.

```js
function twoSort(s) {
  let one = s.sort()
  console.log(one)
  let two = one.find((word, arr) => arr == 0).split('').join('***')
  // console.log(typeof two)
  console.log(two)
}

twoSort(['happy', 'birthday', 'to', 'you','Hey'])
twoSort(['zebra','what','it','is','hoe','apple','wassup'])
```


3. Finally, I cleaned it up into one long string of array and string methods to give us the result that we are wanting. 

```js
function twoSort(s){
 return s.sort().find((word, arr) => arr == 0).split('').join('***')
}
```

4. Also, this code can be shortened by using [0] instead of .find()
```js
function twoSort(s){
 return s.sort()[0].split('').join('***')
}
```