# :atom_symbol: Fundamentos Redux

## :robot: Índice

- 0 - [**useState** - O que são Hooks e manipulando states](#0)
- 1 - [**useEffect** - Lifecycle ](#1)
- 2 - [**useContext** - Contextos](#2)
- 3 - [**useReducer** - Manipular mais estados](#3)
****
> Playlist com todos os Hooks  
> https://www.youtube.com/watch?v=x7jm93Mrvtc&list=PLPXWI3llyMiLayGs4_noY8Q1-rbmbFoYM&ab_channel=MateusSilva

## <a name="0">**useState** - O que são Hooks e manipulando states</a>

São funções que permitem usar funcionalidades que existiam apenas em classes. como **states** e **lifecycles**.

- Funcionam apenas em componentes funcionais.
- São invocados sempre no escopo principal do componente.
- Não podem estar atrelados a nenhuma condicional para serem executados.

O **useState** será o hook mais utilizado, ele nos dar o poder de usar states em componentes funcionais.

Ele recebe um parâmetro, o **valor inicial** do estado ou uma função que retorne este valor e retorna um array com duas posições, sendo a primeira delas o **valor do estado** e uma função que **altera o valor desse estado**.

```js
function App() {
  const [counter, setCounter] = useState(0);
  
  function handlePlus() {
    setCounter(counter + 1);
  }

  function handleMinus() {
    setCounter(counter - 1);
  }

  return(
    <div>
      <h1>{counter}<h1/>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}
```

> Não é uma boa prática acessar diretamente o valor do estado para alterá o mesmo em alguns casos.

### Para que o React pegue o valor corretamente.

```js
function App() {
  const [counter, setCounter] = useState(0);
  
  function handlePlus() {
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000)
  }

  function handleMinus() {
    setCounter(counter - 1);
  }

  return(
    <div>
      <h1>{counter}<h1/>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}
```

> No exemplo a cima mesmo com o delay imposto o valor será alterado corretamente.

## <a name="1">**useEffect** - Lifecycle</a>

- Só pode ser executado no escopo principal.

```js
  useEffect(() => {
    console.log('run');
  })
```
> Será executado sempre que o componente renderizar.


```js
  useEffect(() => {
    console.log('run');
  }, [])
```
> Será executado apenas quando o componente for **montado** pela primeira vez.

```js
  useEffect(() => {
    return () => {
      console.log('run');
    }
  })
```
> Será executado apenas quando o componente for **desmontado**.

- O segundo argumento no useEffect é usado como um array de dependências, que so será executado quando um estado nesse array mudar.

```js
  useEffect(() => {
    console.log('run');
  }, [estado1, estado2])
```

### **Jeito certo para usar assincronismo dentro de um useEffect** 

```js
  // Normal
  useEffect(() => {
    async function load() {
      await api.get(()...)
    }
    load();
  })

  // Immediately Invoked Function Expression

  useEffect(() => {
    (async () => {
      await api.get(()...)
    })();
  })

```

## <a name="2">useContext - Contextos</a>

```js
import React, { createContext, useContext } from 'react';

import './App.css';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      <Button />
    </ThemeContext.Provider>
  )
}

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <button>{theme.mode}<button>
  )
}
```

- Basta invocar a função useContext enviando como único argumento o contexto que queremos pegar informações e o hook retorna todos os valores.

## <a name="3">useReducer - Manipulação de múltiplos estados</a>

```js
import React, { useReducer} from 'react';

function reducer(state, action) {
  // É uma boa prática usar Switch no lugar de if/else
  switch(action.type) {
    case 'minus':
      return {  
        counter: state.counter - 1,
        clicks: state.clicks + 1
      }
    case 'plus':
      return {  
        counter: state.counter + 1,
        clicks: state.clicks + 1
      }
    default: return state
  }
}

const initialValue = {
  counter: 0,
  clicks: 0
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue)

  function handleMinus() {
    dispatch({ type: 'minus' });
  }

  function handlePlus() {
    dispatch({ type: 'plus' });
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={}>-</button>
      <button onClick={}>+</button>
    </div>
  )
}

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <button>{theme.mode}<button>
  )
}
```

> reducer sempre precisa retornar alguma coisa, o retorno da função reducer será valor atualizado. 