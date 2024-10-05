/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

//sol, honestly pretty hard for 8kyu. the only thing i was missing was the map() method
function digitize(num){
    return num.toString().split('').reverse().map(Number)
}