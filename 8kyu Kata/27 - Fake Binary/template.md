# 8kyu - Fake Binary

## Description
```js
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
```


**Link:** https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript

## My Solution

### Refactoring in Steps
1. First I started by using methods I didn't need, and had quite a bit of code.

```js
function fakeBin(x) {
    const xmapped = x.split('').map( num => parseInt(num, 10))

   console.log(xmapped)

   const remapped = xmapped.map(num => {
      if (num < 5) {
         return '0'
      } else if (num >= 5) {
         return '1'
      }
   })
   console.log(remapped)
   console.log(remapped.join(''))
}

fakeBin('5342432786789') //returns 1000000111111
```


2. Then I took out any redundant code, such as the first .map() which used parseInt
```js
function fakeBin(x){
   return x.split('').map(num => {
      if (num < 5){
         return '0'
      } else if (num >= 5){
         return '1'
      }
   }).join('')
}

console.log(fakeBin('5342432786789')) //returns 1000000111111
```

3. Lastly, because this is quite a short if else statement, I can use the ternary operator to make this all into one line of code.

```js
function fakeBin(x){
   return x.split('').map(num => num < 5 ? '0' : '1').join('')
 }

 console.log(fakeBin('5342432786789')) //returns 1000000111111
 ```

***

 ```js
 //.split() -> takes string and turns it into an array
 //.map() -> takes array and spits out new array
 //.join() -> turns array back into string
 ```
