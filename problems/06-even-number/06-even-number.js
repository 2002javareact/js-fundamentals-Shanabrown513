/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum){
    let half = someNum/2;
    if ((half - Math.floor(half)) !== 0)
    {
    return false;
    }
    else
    {
    return true;   
}
}
console.log(isEven(10))

