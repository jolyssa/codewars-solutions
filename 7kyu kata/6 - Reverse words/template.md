# 7kyu - Reverse words

## Description
```js
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
```

**Link:** https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

## My Solution

1. I started with this, just to see what was going on with each split, reverse, and join.
```js
function reverseWords(str) {
    let revOne = str.split("").reverse().join("")
    console.log(revOne)
    
    let revTwo = revOne.split(" ").reverse().join(' ')
    console.log(revTwo)
    }

    reverseWords('hello how are you')
```


2. Since everything is functioning as it should, we can put them all together in a long chain like this!
```js
function reverseWords(str) {
return str.split("").reverse().join("").split(" ").reverse().join(" ")  
}
```