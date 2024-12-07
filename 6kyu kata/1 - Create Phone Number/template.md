# 6kyu - 

## Description
```js
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/
```

**Link:** 

## My Solution
```js
//sol using substring!
function createPhoneNumber(numbers){
    numbers = numbers.join('')
    //format should be (123) 456-7890
    let phoneNumber = `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6)}`
    return phoneNumber
  }
```