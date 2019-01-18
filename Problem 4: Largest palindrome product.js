function LPP () { 
	let largest = 0;
	for (let i = 999; i >= 100; i--) {
		for (let j = 999; j >= 100; j--) {
			let test = i * j;
			let reverse = parseInt(`${test}`.split("").reverse().join(""), 10);
			if (test === reverse && test > largest) {
				largest = test;
            };
        };
    };
	console.log(largest);
};
