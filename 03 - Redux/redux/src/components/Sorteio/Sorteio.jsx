import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';

function Sorteio(props) {
  
  const { min, max } = props.numbers;
  const randomNumber = parseInt(Math.random() * (max - min));

  return(
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{randomNumber}</strong>          
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    numbers: state.numbers,
  }
}

export default connect(mapStateToProps)(Sorteio)