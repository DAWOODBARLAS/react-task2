// import React from 'react';

// function EmptyDiv(props) {
//   return (
//     <div>
//       <button onClick={() => props.onClick("1")}>1</button>
//       <button onClick={() => props.onClick("2")}>2</button>
//       <button onClick={() => props.onClick("3")}>3</button>
//       <button onClick={() => props.onClick("4")}>4</button>
//       <button onClick={() => props.onClick("5")}>5</button>
//       <button onClick={() => props.onClick("6")}>6</button>
//       <button onClick={() => props.onClick("7")}>7</button>
//       <button onClick={() => props.onClick("8")}>8</button>
//       <button onClick={() => props.onClick("9")}>9</button>
//       <button onClick={() => props.onClick("0")}>0</button>
//       <button onClick={props.onClear}>C</button>
//       <button onClick={props.onClearAll}>AC</button>
//       {/* <button onClick={props.onAdd}>+</button>
//       <button onClick={props.onEquals}>=</button> */}


//     </div>
//   );
// }




import React from 'react';

// Component for Button 1
function Button1(props) {
  const handleClick = () => {
    props.onClick("1");
  };

  return <button onClick={handleClick}>1</button>;
}

// Component for Button 2
function Button2(props) {
  const handleClick = () => {
    props.onClick("2");
  };

  return <button onClick={handleClick}>2</button>;
}

// Component for Button 3
function Button3(props) {
  const handleClick = () => {
    props.onClick("3");
  };

  return <button onClick={handleClick}>3</button>;
}

// Component for Button 4
function Button4(props) {
  const handleClick = () => {
    props.onClick("4");
  };

  return <button onClick={handleClick}>4</button>;
}

// Component for Button 5
function Button5(props) {
  const handleClick = () => {
    props.onClick("5");
  };

  return <button onClick={handleClick}>5</button>;
}

// Component for Button 6
function Button6(props) {
  const handleClick = () => {
    props.onClick("6");
  };

  return <button onClick={handleClick}>6</button>;
}

// Component for Button 7
function Button7(props) {
  const handleClick = () => {
    props.onClick("7");
  };

  return <button onClick={handleClick}>7</button>;
}

// Component for Button 8
function Button8(props) {
  const handleClick = () => {
    props.onClick("8");
  };

  return <button onClick={handleClick}>8</button>;
}

// Component for Button 9
function Button9(props) {
  const handleClick = () => {
    props.onClick("9");
  };

  return <button onClick={handleClick}>9</button>;
}

// Component for Button 0
function Button0(props) {
  const handleClick = () => {
    props.onClick("0");
  };

  return <button onClick={handleClick}>0</button>;
}

// Component for Clear Button
function ButtonC(props) {
  const handleClick = () => {
    props.onClear();
  };

  return <button onClick={handleClick}>C</button>;
}

// // Component for Clear All button
function ButtonAC(props) {
  const handleClick = () => {
    props.onClearAll();
  };

  return <button onClick={handleClick}>AC</button>;
}

export { Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8, Button9, Button0, ButtonC, ButtonAC };

