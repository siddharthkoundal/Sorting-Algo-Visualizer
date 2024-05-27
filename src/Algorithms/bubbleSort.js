// src/algorithms/bubbleSort.js
const bubbleSort = async (
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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      highlight([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (pause) await step();
      }
      updateElapsedTime();
    }
    sorted.unshift(arr.length - i - 1);
    setSortedIndices([...sorted]);
  }
  setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
  return arr;
};

export default bubbleSort;
