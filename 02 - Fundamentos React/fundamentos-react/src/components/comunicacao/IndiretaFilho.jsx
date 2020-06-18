import React from 'react';

export default (props) => {
  const randomNumber = () => parseInt(Math.random() * (20)) + 50;
  const randomBool = () => Math.random() > 0.5;
  
  return (
    <div>
      <div>Filho</div>
      <button onClick={
        () => {props.onClick('Nomepassado', randomNumber(), randomBool())}
      }>Fornecer Informações</button>
    </div>
  )
}