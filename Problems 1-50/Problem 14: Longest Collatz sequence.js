function LCS(max){
  let long = {
    start: 0,
    length: 0
  }
  for(i = max - 1; i > 1; i--){
    let test = collatz(i);
    if (test > long.length) {
      long.length = test;
      long.start = i;
      console.log(`Longest chain is currently at ${i}`);
    }
  }
  console.log(`Done! ${long.start} is the longest position with a length of ${long.length}`);
}

function collatz(n) {
  if (n === 1) {
    return 0;
  } else if (n % 2 === 0) {
    return 1 + collatz(n/2);
  } else {
    return 1 + collatz(3*n + 1);
  }
};

LCS(1000000);