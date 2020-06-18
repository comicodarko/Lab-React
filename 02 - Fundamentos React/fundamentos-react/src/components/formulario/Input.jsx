import React, { useState } from 'react';

import './Input.css';

export default (props) => {
  
  const [value, setValue] = useState('1');

  function change(e) {
    setValue(e.target.value);
  }

  return(
    <div className="input">
    <h2>{value}</h2>
      <input
        type="text"
        value={value}  
        onChange={change}
      />

      <input
        type="text"
        value={value}  
        readOnly     
      />

      <input value={undefined} />
    </div>
  )
}