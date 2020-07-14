# :atom_symbol: Fundamentos React

## :robot: Índice

- 1 - [Apostila](https://github.com/comicodarko/Lab-React/tree/master/01%20-%20Extras)
- 2 - [Fundamentos React](#02)
	- 2.1 - [Primeiro Projeto](#02-1)
	- 2.2 - [Primeiro Componente](#02-2)
  - 2.3 - [Componente com Propriedade](#02-3)
  - 2.4 - [Forma enxuta para Componentes Funcionais](#02-4)
  - 2.5 - [Componente Card](#02-5)
  - 2.6 - [Componente Filho](#02-6)
  - 2.7 - [Repetição](#02-7)
  - 2.8 - [Renderização Condicional](#02-8)
  - 2.9 - [Comunicação Entre Componente](#02-9)
  - 2.10 - [Estado](#02-10)
  - 2.11 - [Componente baseado em Classe](#02-11)
****

## <a name="02-1">Primeiro projeto</a>

```console
npx create-react-app <nome>
```
Executa a criação do projeto sem instalar o comando

**DOM** - Modelo de Objeto de Documento, é basicamente a estrutura da página web.

```js
import ReactDOM from 'react-dom';

// Recuperando a div com o id 'root'
const el = document.getElementById('root');

ReactDOM.render('Hello Friend', el)
```

### **JSX**

É o HTML dentro do JavaScript.

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello Friend</h1>,
  document.getElementById('root')
)
```

```js
const tag = <strong>Hello Friend</strong>

ReactDOM.render(
  <h1>{ tag }</h1>,
  document.getElementById('root')
)
```

### **Carregando CSS**

Import relativo.

```js
import './index.css';
```

****

## <a name="02-1">Primeiro Componente</a>

- CamelCase
- .jsx

Exportando:
```js
export default function First() {
  return 'Primeiro Componente';
}
```

Exportando com JSX:
```JS
import React from 'react';

export default function First() {
  return <h2>Hello Friend</h2>
}
```

Importando e utilizando:
```js
import First from './components/basics/First';

ReactDOM.render(
  <h1><First /></h1>,
  document.getElementById('root')
)
```
****￼

## <a name="02-3">Componente com Propriedade</a>

Os componentes que criamos até agora são componentes funcionais, baseados em funções.

No componente:
```js
import React from 'react';

export default function ComParametro(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </div>   
  )
}
```

Na utilização do componente:

```js
<ComParametro
  title="titulo"
  subtitle="subtitulo"
/>
```

### Propriedades são apenas para **leitura**
Não se pode alterar essa propriedades passadas por parâmetro.

## React Fragment
Componentes adjacentes JSX devem ser envolvidos por alguma tag, o fragment serve para isso sem alterar visualmente ou semânticamente a página.

```js
export default function Fragmento() {
  return (
    <> 
      <h2>Fragmento</h2>
      <p>CUidado com esse erro!</p>
    </>
  )
}
```

Porém e se for necessário usar uma **propridade**?
```js
export default function Fragmento() {
  return (
    <React.Fragment key="1"> 
      <h2>Fragmento</h2>
      <p>CUidado com esse erro!</p>
    </React.Fragment>
  )
}
```

****

## <a name="02-4">Componente Funcional Enxuto</a>

- Caso seja usado o export default, não é necessário nomear a função.

```js
export default _ => 
    <>  
      <h1>Fundamentos React</h1>
      <Fragmento />
      <ComParametro
        title="titulo"
        subtitle="subtitulo"
      />
      <First />
    </>
```

Favorito: 
```js
export default () => ( 
  <>  
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro
      title="titulo"
      subtitle="subtitulo"
    />
    <First />
  </>
);
```

## <a name="02-5">Componente Card</a>

- No react é utilizado **className** em vez de class.

Acessando componentes filhos:

```jsx
<Card titulo="Número aleatório">
  <Aleatorio 
    min={1}
    max={100}
  />
</Card>
```

```jsx
export default (props) =>{

  return (
    <div className="card">
      <div className="title">{props.titulo}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}
```

Recebendo um atributo CSS:

```jsx
<Card titulo="#04 - Número aleatório" color="#080">
...
```

No Componente:

```jsx
export default (props) =>{

  const style = {
    backgroundColor: props.color || '#f00',
    borderColor: props.color || '#f00' //Padrão
  }

  return (
    <div className="card" style={style}>
      <div className="title">{props.titulo}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}
```

Alternativa: 

```jsx
return (
    <div className="card" style={{
      backgroundColor: props.color || '#f00',
      borderColor: props.color || '#f00' //Padrão
    }>
      <div className="title">{props.titulo}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
```

***

## <a name="02-6">Componente Filho</a>

Passando propriedades para componentes filhos:

```jsx
export default (props) => {
  return (
    <div> 
      <FamiliaMembro nome="Fábio" sobrenome={props.sobrenome}/>
      <FamiliaMembro nome="José" {...props}/> 
      <FamiliaMembro nome="Teixeira" sobrenome={props.sobrenome}/>
    </div>
  )
}
```

### Algo um pouco mais complexo.

Como passar as as propriedades de um componente pai para os filhos desse jeito?
```jsx
<Familia sobrenome="Filho">
  <FamiliaMembro nome="Fábio" />
  <FamiliaMembro nome="José" />
  <FamiliaMembro nome="Texeira" />          
</Familia>
```

Quando não se tem acesso diretamente aos filhos:
```jsx
export default (props) => {
  return (
    <div>
      {
        props.children.map((child) => {
          return cloneElement(child, props);
        })
      }
    </div>
  )
}
```

****

## <a name="02-7">Repetição</a>

Usando map:
```jsx
import alunos from '../../data/alunos'; 

export default () => {

  const students = alunos.map(aluno => {
    return <li key={aluno.id}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>
  })

  return (
    <div>
      <ul>
        {students}
      </ul>
    </div>
  )
}
```
> A **key** é importante para o React detectar as eventuais mudanças que possam acontecer em cada elemento.

***

## <a name="02-8">Renderização Condicional</a>

```js
export default (props) => {
  const isPar = props.number % 2 === 0;

  return (
    <div>
      { isPar ? 
        <span>Par</span> : 
        <span>Ímpar</span>
      }
      
    </div>
  )
}
```

Outro exemplo:
```js
export default (props) => {
  if (props.test) {
    return props.children; //Irá renderizar
  }  else {
    return false;
  }
} 
```

```jsx
<If test={user && user.nome}>
  Seja bem vindo <strong>{props.usuario.nome}</strong>
</If>

<If test={!user || !user.nome}>
  Seja bem vindo <strong>brother!</strong>
</If>
```

****

## <a name="02-9">Comunicação Entre Componentes</a>

### Comunicação **Direta** 

Se dá através das **props**. do componente pai para o componente filho

### Comunicação **Indireta**

Quando você precisa passar informações do componente filho para o componente pai:

Filho:
```jsx
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
```

Pai:
```jsx
import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {

  function fornecerInformações(texto, numero, bool) {
    console.log(texto, numero, bool);
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho onClick={fornecerInformações}/>
    </div>
  )
}
```

Como mostrar essas informações no componente pai?

## <a name="2-10">Estado</a> 

O conceito de React **Hooks**

- Os dados são alterados e a interface gráfica reflete na alteração desses dados.

```js
import React, { useState }from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [bool, setBool] = useState(false);

  function fornecerInformações(text, number, bool) {
    setText(text);
    setNumber(number);
    setBool(bool)
  }

  return (
    <div>
      <span>{text} - </span>
      <span>{number} - </span>
      <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
      <div>Pai</div>
      <IndiretaFilho onClick={fornecerInformações}/>
    </div>
  )
}
```

### Componente controlado.

```jsx
import React, { useState } from 'react';
export default (props) => {
  
  const [value, setValue] = useState('1');

  return(
    <div className="input">
      <input
        type="text"
        value={value}  
      />
    </div>
  )
}
```
> Não será possível mudar o valor do input de texto pela interface.

Mudando na interface gráfica com o estado:

```jsx
import React, { useState } from 'react';

import './Input.css';

export default (props) => {
  
  const [value, setValue] = useState('1');

  function change(e) {
    setValue(e.target.value);
  }

  return(
    <div className="input">
      <input
        type="text"
        value={value}  
        onChange={change}
      />

      <input
        type="text"
        value={value}  
        readOnly     
      />
    </div>
  )
}
```

- Caso venha a estourar um erro usar **readOnly**.

Para criar um Componente Não Controlado:

```jsx
<input value={undefined} />
```

## <a name="02-11">Componente Baseado em Classe</a>

- A principal diferença entre um componente funcional e um componente baseado em classe é que você tem alguns métodos extras nas classes. 
- Porém na maioria dos caso o uso do componente funcional é o suficiente para uso.

```jsx
import React, { Component } from 'react';

export default class Contador extends Component {
  
  // Estados
  state = {
    // Acessando as props
    number: this.props.initialNumber,

  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        // Acessando os estados
        <p>Valor Inicial: {this.state.number}</p>
      </div>
    )
  }
}
```

Com construtor:

```jsx
import React, { Component } from 'react';

export default class Contador extends Component {

  constructor(props) {
    super(props);

    this.state = {
      number: props.initialNumber,
  
    }
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>Valor Inicial: {this.state.number}</p>
      </div>
    )
  }
}
```

Exemplo final sem o constructor e arrow function no onClick:

```jsx
import React, { Component } from 'react';

export default class Contador extends Component {
  // Estados
  state = {
    number: this.props.initialNumber
  }

  inc() {
    this.setState({
      number: this.state.number + 1
    })    
  }

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={() => this.inc()}>+1</button>
      </div>
    )
  }
}
```

Método final com arrow function na própria função:

```jsx
import React, { Component } from 'react';

export default class Contador extends Component {
  // Estados
  state = {
    number: this.props.initialNumber
  }

  inc = () => {
    this.setState({
      number: this.state.number + 1
    })    
  }

  dec = () => {
    this.setState({
      number: this.state.number -1
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.inc}>+1</button>
        <button onClick={this.dec}>-1</button>
      </div>
    )
  }
}
```