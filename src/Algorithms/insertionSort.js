// src/algorithms/insertionSort.js
const insertionSort = async (
  array,
  setArray,
  delay,
  highlight,
  step,
  pause,
  setPause,
  updateElapsedTime,
  setSortedIndices
) => {
  const arr = array.slice();
  const sorted = [];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      highlight([j, j - 1]);
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (pause) await step();
      j--;
      updateElapsedTime();
    }
    sorted.push(i);
    setSortedIndices([...sorted]);
  }
  setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
  return arr;
};

export default insertionSort;
