/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/


//solution 1, using .includes()
function check(a,x){
    if (a.includes(x)){
    return true}
    else
    return false
  };

  //just a bit shorter

  const check = (a,x) => a.includes(x)