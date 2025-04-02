function findMissingNumber(nums) {
  const numsLength = nums.length;
  //   let sumOfNums = 0;
  //   for (let i = 0; i < numsLength; i++) {
  //     sumOfNums += nums[i];

  return (
    (numsLength * (numsLength + 1)) / 2 -
    nums.reduce((acc, curr) => acc + curr, 0)
  );
}

console.log(findMissingNumber([0, 1, 3]));
