function isPalindrome(str) {
    str = str.toLowerCase();

    let reverse = str.split("").reverse().join("");

    return str === reverse;
}
console.log(isPalindrome("level"));