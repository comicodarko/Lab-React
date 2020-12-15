import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';

function Media(props) {
  
  const { min, max } = props.numbers;

  return(
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(min + max) / 2}</strong>          
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

export default connect(mapStateToProps)(Media)