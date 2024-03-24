// import React from 'react'; // Import React to use JSX syntax

// function TodoInputL() { 
//     return (
//         <input type='text' placeholder="Enter your task" className='addInput'></input>
//     );
// }

// export default TodoInputL;

import React from 'react';

function TodoInputL({value, onChange}) {
  // const {value, onChange} = props
  return (
    <input
      type="text"
      placeholder="Enter your task"
      className="addInput"
      value={value}
      onChange={onChange}
    />
  );
}

export default TodoInputL;

