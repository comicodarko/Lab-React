import React from 'react';

import './App.css';

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Card';
import First from './components/basics/First';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';

export default () => (
    <>  
      <h1>Fundamentos React</h1>

    <div className="cards">

      <Card titulo="#13 - Mega" color="#B90064">
        <Mega qtde={8}/>
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador initialNumber={0} />
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#E45F56">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323c">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#972395">
        <ParOuImar number={2} />
        <UsuarioInfo usuario={{ nome: 'Fábio' }}/>
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#300ad9">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>
  
      <Card titulo="#05 - Componente com Filhos" color="#00c9f8">
        <Familia sobrenome="Filho">
          <FamiliaMembro nome="Fábio" />
          <FamiliaMembro nome="José" />
          <FamiliaMembro nome="Texeira" />
          
        </Familia>
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

