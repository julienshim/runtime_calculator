function triangle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

function isOver500(m){
  let count = 0;
  for (let j = 1; j <= m; j++) {
    if (m % j === 0) {
      count++;
    }
  }
  return count > 500 ? true : false;
}

function HDTN() {
  let found = false;
  let index = 12000;
  while (found === false) {
    console.log(`Testing triangle number ${triangle(index)}`);
    if(isOver500(triangle(index))){
      found = true;
      console.log(`${triangle(index)} is the first triangle number with over 500 divisors.`);
    }
    index++;
  }
}

HDTN(); // runtime ~00:14:50