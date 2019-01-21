function speThag(n){
  let sum = n;

  for (let a = 1; a < sum; a++) {
    for (let b = a+1; b < sum; b++) {
      let c = sum - a - b;
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        console.log(`A = ${a} * B = ${b} * C = ${c} = ${a * b * c}`);
      }
    }
  }

}

speThag(1000);