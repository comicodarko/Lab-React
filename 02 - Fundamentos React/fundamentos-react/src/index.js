import React from 'react';
import ReactDOM from 'react-dom';

import First from './components/basics/First';
import './index.css';

const tag = <strong>Hello Friend</strong>

ReactDOM.render(
  <h1><First /></h1>,
  document.getElementById('root')
)