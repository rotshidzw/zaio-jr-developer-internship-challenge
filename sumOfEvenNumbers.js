function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  }

  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = sumOfEvenNumbers(numbers);
  console.log("Sum of Even Numbers:", result);
