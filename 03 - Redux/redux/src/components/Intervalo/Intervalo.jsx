import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';
import { changeMinNumber, changeMaxNumber } from '../../store/actions/numbers';
import './Intervalo.css'

function Intervalo(props) {

  const { min, max } = props.numbers; 

  return(
    <Card title="Intervalo de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={e => props.changeMin(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={e => props.changeMax(+e.target.value)}
          />
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

function mapDispatchToProps(dispatch) {
  return {
    changeMin(newNumber) {
      const action = changeMinNumber(newNumber);
      dispatch(action); 
    },

    changeMax(newNumber) {
      const action = changeMaxNumber(newNumber);
      dispatch(action); 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)