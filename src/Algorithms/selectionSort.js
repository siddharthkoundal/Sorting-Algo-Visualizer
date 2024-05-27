// src/algorithms/selectionSort.js
const selectionSort = async (
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
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      highlight([i, j]);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      updateElapsedTime();
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (pause) await step();
    }
    sorted.push(i);
    setSortedIndices([...sorted]);
  }
  setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
  return arr;
};

export default selectionSort;
