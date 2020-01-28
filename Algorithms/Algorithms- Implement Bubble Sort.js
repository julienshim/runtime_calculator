function bubbleSort(array) {
  // change code below this line
  let run = true;
  while (run) {
    run = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          run = true;
      }
    }
  }
  return array;
  // change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
