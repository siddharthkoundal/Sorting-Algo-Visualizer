# Sorting Visualizer

Sorting Visualizer is a web application that allows users to visualize various sorting algorithms in action. The application provides a dynamic and interactive way to understand how different sorting algorithms work by animating the sorting process in real-time.

## Features

- Visualize multiple sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
- Adjust the speed of the visualization.
- Reset the array to sort a new set of numbers.
- Highlight the elements being compared and the sorted elements.
- Display the time and space complexity of the selected algorithm.

## Demo

You can view the live project [here](https://your-live-project-link.com).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sorting-visualizer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Select Algorithm**: Choose a sorting algorithm from the dropdown menu.
- **Adjust Speed**: Use the speed control slider to adjust the speed of the visualization.
- **Sort Array**: Click the "Sort Array" button to start the sorting visualization.
- **Reset Array**: Click the "Reset Array" button to generate a new random array.
- **Pause/Resume**: Use the pause and resume buttons to control the sorting process (currently commented out in the code).

## File Structure

- `src/algorithms`: Contains the implementation of the sorting algorithms.
- `src/components`: Contains the React components used in the application.
  - `AlgorithmDetails`: Displays the details of the selected algorithm.
  - `AlgorithmSelector`: Dropdown menu to select a sorting algorithm.
  - `ArrayVisualizer`: Visual representation of the array being sorted.
  - `Navbar`: Navigation bar with controls.
  - `SpeedControl`: Slider to control the speed of the visualization.
- `src/App.js`: Main application component.
- `src/App.css`: Main stylesheet for the application.
- `src/index.js`: Entry point of the application.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
