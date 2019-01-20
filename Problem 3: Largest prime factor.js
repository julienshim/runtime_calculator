function LPF(n) {
  let start = Math.ceil(Math.sqrt(n)) % 2 !== 0 ? Math.ceil(Math.sqrt(n)) : Math.floor(Math.sqrt(n));
  for (let i = start; i > 0; i = i-2) {
    if (n % i === 0 && isPrime(i)) {
      console.log(i);
      break;
    }
  }
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
};

LPF(600851475143);
