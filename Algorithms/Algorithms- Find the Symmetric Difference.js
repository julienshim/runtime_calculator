function sym(args) {
  // put all the arguments in an array
  const argArr = [...arguments];
  // compare sets of argArr and output 'symmetric differences'
  const diffArr = argArr.reduce((acc, val) => {
    return acc.concat(val)
      .filter(x => !val.includes(x) || !acc.includes(x))
  })
  // filter diffArr into unique vals
  const diffArrUniq = diffArr.filter((x, i, self) => self.indexOf(x) === i);
  
  return diffArrUniq
}

sym([1, 2, 3], [5, 2, 1, 4]);
