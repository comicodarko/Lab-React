# :atom_symbol: Fundamentos React

## :robot: Indíce

- 1 [Apostila]()
- 2 [Fundamentos React](#02)
	- 2.1 [Primeiro Projeto](#02-1)
	- 2.2 [Primeiro Componente](#02-1)

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

