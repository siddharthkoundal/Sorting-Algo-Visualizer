// src/algorithms/quickSort.js
const partition = async (
  arr,
  low,
  high,
  setArray,
  delay,
  highlight,
  step,
  pause,
  updateElapsedTime,
  setSortedIndices
) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    highlight([j, high]);
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (pause) await step();
      updateElapsedTime();
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray(arr.slice());
  await new Promise((resolve) => setTimeout(resolve, delay));
  if (pause) await step();
  updateElapsedTime();
  return i + 1;
};

const quickSortUtil = async (
  arr,
  low,
  high,
  setArray,
  delay,
  highlight,
  step,
  pause,
  updateElapsedTime,
  setSortedIndices
) => {
  if (low < high) {
    const pi = await partition(
      arr,
      low,
      high,
      setArray,
      delay,
      highlight,
      step,
      pause,
      updateElapsedTime,
      setSortedIndices
    );
    await quickSortUtil(
      arr,
      low,
      pi - 1,
      setArray,
      delay,
      highlight,
      step,
      pause,
      updateElapsedTime,
      setSortedIndices
    );
    await quickSortUtil(
      arr,
      pi + 1,
      high,
      setArray,
      delay,
      highlight,
      step,
      pause,
      updateElapsedTime,
      setSortedIndices
    );
  }
  if (low >= 0 && high >= 0 && low < arr.length && high < arr.length) {
    setSortedIndices((prevIndices) => [
      ...prevIndices,
      ...Array.from({ length: high - low + 1 }, (_, i) => low + i),
    ]);
  }
};

const quickSort = async (
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
  await quickSortUtil(
    arr,
    0,
    arr.length - 1,
    setArray,
    delay,
    highlight,
    step,
    pause,
    updateElapsedTime,
    setSortedIndices
  );
};

export default quickSort;
