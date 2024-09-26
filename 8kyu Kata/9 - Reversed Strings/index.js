/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//sol 1
function solution(str){
    return str.split('').reverse().join('')
  }

  //or
  function solution(str){
    str = str
            .toString()
            .split('')
            .reverse()
            .join('')
    return str
  }

  //easy!