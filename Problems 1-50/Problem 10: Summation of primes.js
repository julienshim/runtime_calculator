function primeSum(n) {
  let sum = n >= 2 ? 2 : 0;
  for (let i = 3; i < n; i = i+2) {
    if (isPrime(i)) {
      sum += i;
      console.log(i, sum);
    }
  }
  console.log(`The sum of primes under ${n} is ${sum}`);
}

// primeSum(10);
primeSum(2000000); // ~00:07:18 run time

function isPrime(c) {
  if (c === 1) {
    return false;
  } else if (c === 2) {
    return true;
  } else {
    for (let i = 2; i < c; i++) {
      if (c % i === 0) {
        return false;
      }
    }
    return true;
  }
};