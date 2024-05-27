// src/components/AlgorithmSelector.js
import React from "react";
import "./AlgorithmSelector.css";

const AlgorithmSelector = ({ onChange }) => {
  return (
    <select
      className="algorithm-selector"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="bubbleSort">Bubble Sort</option>
      <option value="selectionSort">Selection Sort</option>
      <option value="insertionSort">Insertion Sort</option>
      <option value="mergeSort">Merge Sort</option>
      <option value="quickSort">Quick Sort</option>
      <option value="heapSort">Heap Sort</option>
    </select>
  );
};

export default AlgorithmSelector;
