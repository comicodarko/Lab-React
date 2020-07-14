import React from 'react';
import { cloneElement } from 'react';

export default (props) => {
  return (
    <div>
      {
        props.children.map((child) => {
          return cloneElement(child, props)
        })
      }
    </div>
  )
}