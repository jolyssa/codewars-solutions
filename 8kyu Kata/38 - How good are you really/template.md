# 8kyu - How good are you really?


## Description
```js
/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/
```

**Link:** https://www.codewars.com/kata/5601409514fc93442500010b/javascript

## My Solution

```js
function betterThanAverage(classPoints, yourPoints) {

 classPoints.push(yourPoints)
 
 let avg = classPoints.reduce((sum, num) => 
  sum + num / classPoints.length, 0)

if (yourPoints > avg) {
  return true
 } else if (yourPoints < avg){
  return false
 }
}

//or

function betterThanAverage(classPoints, yourPoints) {

  classPoints.push(yourPoints)
  
  let avg = classPoints.reduce((sum, num) => 
   sum + num / classPoints.length, 0)
 
 return yourPoints > avg
}
```

if we're wanting it without actually writing out what our average is, we can reduce the code to:  

```js
const betterThanAverage = (classPoints, yourPoints) => {
  classPoints.push(yourPoints)
  
   return yourPoints > classPoints.reduce((sum, num) => 
   sum + num / classPoints.length,0)
}
```

but personally not a fan! :p