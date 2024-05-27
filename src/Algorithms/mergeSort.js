// src/algorithms/mergeSort.js
const merge = async (
  arr,
  l,
  m,
  r,
  setArray,
  delay,
  highlight,
  step,
  pause,
  updateElapsedTime,
  setSortedIndices
) => {
  const n1 = m - l + 1;
  const n2 = r - m;
  const left = new Array(n1);
  const right = new Array(n2);

  for (let i = 0; i < n1; i++) left[i] = arr[l + i];
  for (let i = 0; i < n2; i++) right[i] = arr[m + 1 + i];

  let i = 0,
    j = 0,
    k = l;

  while (i < n1 && j < n2) {
    highlight([l + i, m + 1 + j]);
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    setArray(arr.slice());
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (pause) await step();
    k++;
    updateElapsedTime();
  }

  while (i < n1) {
    highlight([l + i]);
    arr[k] = left[i];
    setArray(arr.slice());
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (pause) await step();
    i++;
    k++;
    updateElapsedTime();
  }

  while (j < n2) {
    highlight([m + 1 + j]);
    arr[k] = right[j];
    setArray(arr.slice());
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (pause) await step();
    j++;
    k++;
    updateElapsedTime();
  }

  setSortedIndices((prevIndices) => [
    ...prevIndices,
    ...Array.from({ length: r - l + 1 }, (_, i) => l + i),
  ]);
};

const mergeSortUtil = async (
  arr,
  l,
  r,
  setArray,
  delay,
  highlight,
  step,
  pause,
  updateElapsedTime,
  setSortedIndices
) => {
  if (l >= r) return;
  const m = l + Math.floor((r - l) / 2);
  await mergeSortUtil(
    arr,
    l,
    m,
    setArray,
    delay,
    highlight,
    step,
    pause,
    updateElapsedTime,
    setSortedIndices
  );
  await mergeSortUtil(
    arr,
    m + 1,
    r,
    setArray,
    delay,
    highlight,
    step,
    pause,
    updateElapsedTime,
    setSortedIndices
  );
  await merge(
    arr,
    l,
    m,
    r,
    setArray,
    delay,
    highlight,
    step,
    pause,
    updateElapsedTime,
    setSortedIndices
  );
};

const mergeSort = async (
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
  await mergeSortUtil(
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

export default mergeSort;
