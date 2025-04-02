function sumOfDigit(num) {
  let sum = 0;
  while (num != 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.trunc(num / 10);
  }
  return sum;
}

console.log(sumOfDigit(12345));
