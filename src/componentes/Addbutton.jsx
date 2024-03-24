// import React from 'react';
// function AddButton(){
//     return(
//         <button className='addBtn'>Add</button>
//     )
// }
// export default AddButton;

import React from 'react';

function AddButton({ onClick }) {
  return (
    <button className="addBtn" onClick={onClick}>
      Add
    </button>
  );
}

export default AddButton;
