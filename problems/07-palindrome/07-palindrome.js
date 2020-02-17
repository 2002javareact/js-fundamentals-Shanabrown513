/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    for (i=0; i<= someStr.length/2; i++) {
    if (someStr[i] === someStr[(someStr.length-1)-i]){
        return true;
        }
        else{
            return false;
        }
    }
}
const seres = "ff";
console.log(isPalindrome(seres))