function fib(n) {
  let seq = [1,2]
  let sum = 0;
  for (let i = 2; i < n; i++){
    seq.push(seq[i-1]+seq[i-2]);
  }
  seq.forEach(function(num){
    if (num % 2 === 0) {
      sum += num;
    }
  });
  console.log(sum);
}
