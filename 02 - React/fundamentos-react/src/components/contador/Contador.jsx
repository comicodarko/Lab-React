import React, { Component } from 'react';

import './Contador.css';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends Component {
  // Estados
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.step || 1
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step
    })    
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.step
    })
  }

  setStep = (e) => {
    this.setState({
      step: +e.target.value
    })
  }

  render() {
    return (
      <div className="contador">
        <Display number={this.state.number}/>
        <PassoForm step={this.state.step} setStep={this.setStep}/>
        <Botoes decrementar={this.dec} incrementar={this.inc} />
      </div>
    )
  }
}