function fiboEvenSum(n) {
  // You can do it!
  const fibo = [1,2]
  for (let i = 2; i < n; i++){
    const prev2 = fibo[i-1]+fibo[i-2]
    fibo.push(prev2);
  }
  const even = fibo.filter( x => x % 2 === 0);
  const evenSum = even.reduce((acc, val) => acc + val, 0);
  return evenSum
}

fiboEvenSum(10);