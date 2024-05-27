// src/algorithms/heapSort.js
const heapify = async (
  arr,
  n,
  i,
  setArray,
  delay,
  highlight,
  step,
  pause,
  updateElapsedTime,
  setSortedIndices
) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n) highlight([i, left]);
  if (right < n) highlight([i, right]);
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    setArray(arr.slice());
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (pause) await step();
    updateElapsedTime();
    await heapify(
      arr,
      n,
      largest,
      setArray,
      delay,
      highlight,
      step,
      pause,
      updateElapsedTime,
      setSortedIndices
    );
  }
};

const heapSort = async (
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
  const n = arr.length;
  const sorted = [];

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(
      arr,
      n,
      i,
      setArray,
      delay,
      highlight,
      step,
      pause,
      updateElapsedTime,
      setSortedIndices
    );
  }

  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    setArray(arr.slice());
    sorted.push(i);
    setSortedIndices([...sorted]);
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (pause) await step();
    updateElapsedTime();
    await heapify(
      arr,
      i,
      0,
      setArray,
      delay,
      highlight,
      step,
      pause,
      updateElapsedTime,
      setSortedIndices
    );
  }

  setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
  return arr;
};

export default heapSort;
