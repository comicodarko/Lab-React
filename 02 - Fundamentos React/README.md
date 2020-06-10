# :atom_symbol: Fundamentos React

## :robot: Indíce

- 1 - [Apostila](https://github.com/comicodarko/Lab-React/tree/master/01%20-%20Extras)
- 2 - [Fundamentos React](#02)
	- 2.1 - [Primeiro Projeto](#02-1)
	- 2.2 - [Primeiro Componente](#02-2)
  - 2.3 - [Componente com Propriedade](#02-3)
  - 2.4 - [Forma enxuta para Componentes Funcionais](#02-4)
  - 2.5 - []()
  - 2.6 - []()

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
****

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