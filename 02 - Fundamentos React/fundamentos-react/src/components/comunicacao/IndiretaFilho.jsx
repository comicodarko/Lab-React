import React from 'react';

export default (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={
        () => {props.onClick('Nomepassado', 17, true)}
      }>Fornecer Informações</button>
    </div>
  )
}