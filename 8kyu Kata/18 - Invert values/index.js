/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

//solution using .map()
function invert(array) {
    return array.map(i => i * -1)
 }