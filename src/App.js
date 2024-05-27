// src/App.js
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ArrayVisualizer from "./Components/ArrayVisualizer/ArrayVisualizer";
import AlgorithmDetails from "./Components/AlgorithmDetails/AlgorithmDetails";
import bubbleSort from "./Algorithms/bubbleSort";
import selectionSort from "./Algorithms/selectionSort";
import insertionSort from "./Algorithms/insertionSort";
import mergeSort from "./Algorithms/mergeSort";
import quickSort from "./Algorithms/quickSort";
import heapSort from "./Algorithms/heapSort";
import "./App.css";

const App = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [speed, setSpeed] = useState(50);
  const [highlights, setHighlights] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [pause, setPause] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 500)
    );
    setArray(arr);
    setHighlights([]);
    setSortedIndices([]);
    setTimeTaken(0);
    setElapsedTime(0);
  };

  const highlight = (indices) => {
    setHighlights(indices);
  };

  const step = () => {
    return new Promise((resolve) => {
      timeoutRef.current = resolve;
    });
  };

  const updateElapsedTime = () => {
    setElapsedTime((prevTime) => prevTime + 0.1);
  };

  const sortArray = async () => {
    const delay = 101 - speed;
    setPause(false);
    setElapsedTime(0);

    const startTime = performance.now();
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 0.1);
    }, 100);

    switch (algorithm) {
      case "bubbleSort":
        await bubbleSort(
          array,
          setArray,
          delay,
          highlight,
          step,
          pause,
          setPause,
          updateElapsedTime,
          setSortedIndices
        );
        break;
      case "selectionSort":
        await selectionSort(
          array,
          setArray,
          delay,
          highlight,
          step,
          pause,
          setPause,
          updateElapsedTime,
          setSortedIndices
        );
        break;
      case "insertionSort":
        await insertionSort(
          array,
          setArray,
          delay,
          highlight,
          step,
          pause,
          setPause,
          updateElapsedTime,
          setSortedIndices
        );
        break;
      case "mergeSort":
        await mergeSort(
          array,
          setArray,
          delay,
          highlight,
          step,
          pause,
          setPause,
          updateElapsedTime,
          setSortedIndices
        );
        break;
      case "quickSort":
        await quickSort(
          array,
          setArray,
          delay,
          highlight,
          step,
          pause,
          setPause,
          updateElapsedTime,
          setSortedIndices
        );
        break;
      case "heapSort":
        await heapSort(
          array,
          setArray,
          delay,
          highlight,
          step,
          pause,
          setPause,
          updateElapsedTime,
          setSortedIndices
        );
        break;
      default:
        break;
    }

    clearInterval(intervalRef.current);
    const endTime = performance.now();
    setTimeTaken((endTime - startTime) / 1000);
  };

  const pauseSorting = () => {
    setPause(true);
    clearInterval(intervalRef.current);
  };

  const resumeSorting = () => {
    setPause(false);
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 0.1);
    }, 100);
    if (timeoutRef.current) timeoutRef.current();
  };

  return (
    <div className="App">
      <Navbar
        setAlgorithm={setAlgorithm}
        setSpeed={setSpeed}
        speed={speed}
        resetArray={resetArray}
        sortArray={sortArray}
        pause={pause}
        pauseSorting={pauseSorting}
        resumeSorting={resumeSorting}
      />
      <div className="info-container">
        <AlgorithmDetails algorithm={algorithm} />
        <div className="performance-metrics">
          <p>Elapsed Time: {elapsedTime.toFixed(2)} seconds</p>
          {timeTaken > 0 && (
            <p>
              Total Time Taken: <span>{timeTaken.toFixed(2)}</span> seconds
            </p>
          )}
        </div>
      </div>
      <ArrayVisualizer
        array={array}
        highlights={highlights}
        sortedIndices={sortedIndices}
      />
      <footer className="footer">Made with ♥ by Siddharth Koundal</footer>
    </div>
  );
};

export default App;
