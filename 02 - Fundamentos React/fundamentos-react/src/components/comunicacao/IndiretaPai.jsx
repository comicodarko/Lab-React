import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
  let texto = '';
  let numero = 0;
  let bool = false;

  function fornecerInformações(textoParam, numeroParam, boolParam) {
    texto = textoParam;
    numero = numeroParam;
    bool = boolParam;
  }

  return (
    <div>
      <span>{texto} - </span>
      <span>{numero} - </span>
      <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
      <div>Pai</div>
      <IndiretaFilho onClick={fornecerInformações}/>
    </div>
  )
}