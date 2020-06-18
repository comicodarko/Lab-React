import React from 'react';

export default (props) => {
  return (
    <>
      <button onClick={props.decrementar}>-</button>
      <button onClick={props.incrementar}>+</button>
    </>
  )
}