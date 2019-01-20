function SSD() {
  let sumOfSq = 0;
  let sqOfSum = 0;

  for (let i = 1; i <= 100; i++) {
    sumOfSq += Math.pow(i, 2);
    sqOfSum += i;
  }
  
  console.log(Math.pow(sqOfSum, 2) - sumOfSq);
}

SSD();
