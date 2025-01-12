# 8kyu - Surface Area and Volume of a Box

## Description
```js
/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
```

**Link:** https://www.codewars.com/kata/565f5825379664a26b00007c/javascript

## My Solution
```js
function getSize(width, height, length) {
const surfaceArea = 2*(length * width) + 2*(length * height) + 2*(height * width)
const volume = width * height * length
return [surfaceArea, volume]
}
```
