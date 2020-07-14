import React, { useState } from 'react';

import './Mega.css';

export default (props) => {
  function randomNumber(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(random) ? randomNumber(min, max, array) : random;
  } 
  
  function generateNumbers(qtde) {
    const numbers = Array(qtde)
      .fill(0)
      .reduce((nums) => {
      const newNumber = randomNumber(1, 60, nums)
      return [...nums, newNumber]
    }, [])
      .sort((n1, n2) => n1 - n2);
    return numbers;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numbers, setNumbers] = useState(Array(qtde).fill(0));
  
  return(
    <div className="mega">
      <h2>Mega</h2>
      <h3>{numbers.join(' | ')}</h3>
      <div>
        <label>Quantidade de Números</label>
        <input
          min="6"
          max="60"
          type="number"
          value={qtde}
          onChange={(e) => setQtde(+e.target.value)}  
        />
      </div>
      <button
        onClick={() => setNumbers(generateNumbers(qtde))}
      
      >Gerar Números</button>
    </div>
  );
}