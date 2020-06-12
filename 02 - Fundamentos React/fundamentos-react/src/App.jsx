import React from 'react';

import './App.css';

import Familia from './components/basics/Familia';
import Card from './components/layout/Card';
import First from './components/basics/First';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';

export default () => (
    <>  
      <h1>Fundamentos React</h1>

    <div className="cards">
      <Card titulo="#05 - Componente com Filhos" color="#00c9f8">
        <Familia sobrenome="Filho"/>
      </Card>

      <Card titulo="#04 - Número aleatório" color="#FA6900">
        <Aleatorio 
          min={1}
          max={100}
        />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">   
        <ComParametro
          title="titulo"
          subtitle="subtitulo"
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">   
        <First />
      </Card>
    </div>

    </>
)

