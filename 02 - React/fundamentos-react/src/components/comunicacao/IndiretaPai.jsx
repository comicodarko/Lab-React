import React, { useState }from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [bool, setBool] = useState(false);

  function fornecerInformações(text, number, bool) {
    setText(text);
    setNumber(number);
    setBool(bool)
  }

  return (
    <div>
      <span>{text} - </span>
      <span>{number} - </span>
      <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
      <div>Pai</div>
      <IndiretaFilho onClick={fornecerInformações}/>
    </div>
  )
}