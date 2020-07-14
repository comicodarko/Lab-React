import React from 'react';
import If, { Else } from './if';

export default (props) => {
  const user = props.usuario || {}
  return (
    <div>
      {/* <If test={user && user.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong>
      </If>

      <If test={!user || !user.nome}>
        Seja bem vindo <strong>brother!</strong>
      </If> */}

      <If test={user && user.nome}>
        Seja bem vindo <strong>{user.nome}</strong>
        <Else>
          Seja bem vindo <strong>amigo</strong>
        </Else>
      </If>
    </div>
    
  )
}