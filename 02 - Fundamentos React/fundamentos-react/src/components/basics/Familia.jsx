import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default (props) => {
  return (
    <div> 
      <FamiliaMembro nome="Fábio" sobrenome={props.sobrenome}/>
      <FamiliaMembro nome="José" {...props}/>
      <FamiliaMembro nome="Teixeira" sobrenome={props.sobrenome}/>
    </div>
  )
}