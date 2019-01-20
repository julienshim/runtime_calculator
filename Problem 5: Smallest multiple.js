function smallm() {
  let test = 20;
  let yes = 0;
  let twenty = false;
  while (twenty === false) {
    for (let i = 1; i <= 20; i++) {
      if (test % i === 0) {
        yes++;
      } 
    }
    if (yes === 20) {
      twenty = true;
    } else {
      test = test + 20;
      yes = 0;
    }
  }
  console.log(test);
}

smallm();
