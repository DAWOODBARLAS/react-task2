// import React, { useState } from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// // import TodoInputL from './componentes/todoInput';
// // import AddButton from './componentes/Addbutton';
// // import TaskItem from './componentes/TaskItem';


// // function App() {
// //   const [inputValue, setInputValue] = useState('');
// //   const [tasks, setTasks] = useState([]);

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleAddTask = () => {
// //     if (inputValue.trim() !== '') {
// //       setTasks([...tasks, { text: inputValue.trim(), completed: false }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleEditTask = (index, newText) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[index].text = newText;
// //     setTasks(updatedTasks);
// //   };

// //   const handleCompleteTask = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[index] = { ...updatedTasks[index], completed: true };
// //     setTasks(updatedTasks);
// //   };

// //   const handleDeleteTask = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks.splice(index, 1);
// //     setTasks(updatedTasks);
// //   };

  

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <TodoInputL value={inputValue} onChange={handleInputChange} />
// //         <AddButton onClick={handleAddTask} />
        
// //         <ul>
// //           {tasks.map((task, index) => (
// //             <TaskItem
// //               key={index}
// //               task={task}
// //               onEdit={() => handleEditTask(index, prompt("Edit task", task.text))}
// //               onComplete={() => handleCompleteTask(index)}
// //               onDelete={() => handleDeleteTask(index)}
// //             />
// //           ))}
// //         </ul>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState } from 'react';

import './App.css';

// Button Component

// This component represents a button on the calculator.

// It takes props:

// - value: the value displayed on the button

// - onClick: function to handle button click

// - className: additional class name for styling
function Button({ value, onClick, className }) {

  return (

    <button className={`button ${className}`}>

      {value}

    </button>

  );
}

// MainComponent
// This is the main component representing the calculator.
function MainComponent() {

  // State to hold the current value displayed on the calculator
  const [displayValue, setDisplayValue] = useState('');


  // Function to handle button click
  const handleButtonClick = (value) => {

    // Update displayValue by appending the clicked button's value
    setDisplayValue(prevValue => prevValue + value);
  };

  // Function to clear the last digit from displayValue
  const clearLastDigit = () => {

    // Update displayValue by removing the last character
    setDisplayValue(prevValue => prevValue.slice(0, -1));
  };

  // Function to clear all digits from displayValue
  const clearAllDigits = () => {

    // Reset displayValue to an empty string
    setDisplayValue('');
  };

  // JSX representing the calculator UI
  return (

    <div className="calculator">

      {/* Display area to show the current value */}
      <div className="display" id="display">{displayValue}</div>
      
      {/* Buttons for digits 0-9 */}
      <Button value="1" onClick={handleButtonClick} />

      <Button value="2" onClick={handleButtonClick} />

      <Button value="3" onClick={handleButtonClick} />

      <Button value="4" onClick={handleButtonClick} />

      <Button value="5" onClick={handleButtonClick} />

      <Button value="6" onClick={handleButtonClick} />

      <Button value="7" onClick={handleButtonClick} />

      <Button value="8" onClick={handleButtonClick} />

      <Button value="9" onClick={handleButtonClick} />
      
      {/* Buttons to clear last digit or all digits */}
      <Button value="C" onClick={clearLastDigit} className="clear" />

      {/* Add Zero button between clear buttons for styling */}
      <Button value="0" onClick={handleButtonClick} />

      <Button value="AC" onClick={clearAllDigits} className="clear" />

    </div>
  );
}

export default MainComponent;
