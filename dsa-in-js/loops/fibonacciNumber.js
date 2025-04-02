function fibonacciNumber(num) {
  if (num < 2) {
    return num;
  }
  // 0 1 1 2 3 5 8

  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
}

console.log(fibonacciNumber(5));
