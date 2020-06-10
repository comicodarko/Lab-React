import React from 'react';

import First from './components/basics/First';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';

export default () => (
    <>  
      <h1>Fundamentos React</h1>
      <Aleatorio 
        min={1}
        max={100}
      />
      <Fragmento />
      <ComParametro
        title="titulo"
        subtitle="subtitulo"
      />
      <First />
    </>
)