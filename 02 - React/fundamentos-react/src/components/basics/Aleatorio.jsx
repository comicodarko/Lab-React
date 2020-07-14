import React from 'react';


export default (props) => {
  const random = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  
  return(
    <><h2>Valor aleatório</h2>
      <p>
        <strong>Valor Mínimo:</strong> {props.min}
      </p>
      
      <p>
        <strong>Valor Máximo:</strong> {props.max}
      </p>

      <p>
        <strong>Valor Escolhido:</strong> {random}
      </p>
    </>
  )
}