// src/components/AlgorithmDetails/AlgorithmDetails.js
import React from "react";
import "./AlgorithmDetails.css";

const algorithmInfo = {
  bubbleSort: {
    name: "Bubble Sort",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",
  },
  selectionSort: {
    name: "Selection Sort",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",
  },
  insertionSort: {
    name: "Insertion Sort",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",
  },
  mergeSort: {
    name: "Merge Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
  },
  quickSort: {
    name: "Quick Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)",
  },
  heapSort: {
    name: "Heap Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
  },
};

const AlgorithmDetails = ({ algorithm }) => {
  const { name, timeComplexity, spaceComplexity } = algorithmInfo[algorithm];
  return (
    <div className="algorithm-details">
      <h2>{name}</h2>
      <p>Time Complexity: {timeComplexity}</p>
      <p>Space Complexity: {spaceComplexity}</p>
    </div>
  );
};

export default AlgorithmDetails;
