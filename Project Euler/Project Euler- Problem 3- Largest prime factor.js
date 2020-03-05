function largestPrimeFactor(number) {
  // Good luck!
  const nSqrt = Math.sqrt(number);
  const start = Math.ceil(nSqrt) % 2 !== 0 ? Math.ceil(nSqrt) : Math.floor(nSqrt);
  for (let i = start; i > 0; i = i-2) {
    if (number % i === 0 && isPrime(i)) {
      return i;
    }
  }
  return number;
}

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
}
