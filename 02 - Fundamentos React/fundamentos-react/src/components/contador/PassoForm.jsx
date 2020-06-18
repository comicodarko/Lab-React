import React from 'react';

export default (props) => {
  return (
    <div>
      <label htmlFor="stepInput">Passo: </label>
      <input
      type="number"
      name="stepInput"
      id="stepInput"
      value={props.step}
      onChange={props.setStep}  
      />
    </div>
  )
}