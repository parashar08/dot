function reverseNumber(num) {
  let revNumber = 0;
  while (num != 0) {
    const digit = num % 10;
    revNumber = revNumber * 10 + digit;
    num = Math.trunc(num / 10);
  }
  return revNumber;
}

function checkPalindrome(num) {
  return num === reverseNumber(num);
}

console.log(checkPalindrome(1212));
