function ten(n) {
  let count = 0;
  let i = 1;
  while (count < n) {
    if (isPrime(i)) {
      count++;
      console.log(`${i} is prime #${count}`);
      i++;
    } else {
      i++;
    }
  }
}

ten(10001);

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