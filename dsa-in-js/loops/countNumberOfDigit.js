function countNumberOfDigit(num) {
  let count = 0;
  while (num != 0) {
    count++;
    num = Math.trunc(num / 10);
  }
  return count;
}

console.log(countNumberOfDigit(12345));
console.log(countNumberOfDigit(-12345));
