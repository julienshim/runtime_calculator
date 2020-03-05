function largestPalindromeProduct(n) {
  // Good luck!
  let largest = 0;
  const start = +(1 + new Array(n).fill(0).join(""))-1;
  const end = +(1 + new Array (n-1).fill(0).join(""))-1;
	for (let i = start; i >= end; i--) {
		for (let j = start; j >= end; j--) {
			const test = i * j;
			const reverse = parseInt(`${test}`.split("").reverse().join(""), 10);
			if (test === reverse && test > largest) {
				largest = test;
      };
     };
   };
	return largest;
}

largestPalindromeProduct(3);
