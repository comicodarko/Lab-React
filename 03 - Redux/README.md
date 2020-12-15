# :atom_symbol: Fundamentos Redux

## :robot: Índice

- 1 - [Apostila](https://github.com/comicodarko/Lab-React/tree/master/01%20-%20Extras)
- 2 - [React](https://github.com/comicodarko/Lab-React/tree/master/02%20-%20Fundamentos%20React)
- 3 - [Redux](#3-1)
  - 3.1 - [Entendendo o Redux](#3-1)
  - 3.2 - [Criando o Projeto](#3-2)
  - 3.3 - [Integrando o Redux dentro de um componente](#3-3)
****

## <a name="3-1">Entendendo o Redux</a>

Um problema em trabalhar com componentes é ter um estado que precisa ser passado para outro componente distante.

A solução do Redux é um gerenciamento de estado da sua aplicação, o estado fica **fora** do componente ao invés de dentro.

- Função que recebe parâmetros
- Que retorna um objeto
- O objeto é passado para várias funções 
- Essas funções geram o estado na versão atual

****

### Conceitos Centrais

- **Action Creator** - Uma função síncrona que retorna uma **Action**.
- **Action** - É um **  ** que possui um atributo **type** pode ter **dados** também.
- **Reducers** - São **funções puras** onde cada uma altera um **atributo**. Evento dispara todos.

### Anatomia da **Action**

```js
  {
    type: 'ALGUM_EVENTO_OCORREU'
    payload: {
      /* Aqui estão os dados associado ao evento*/
    }
  }
```

Exemplo de **Action**.

```js
{
  type: 'LISTA_PRODUTOS_CHEGOU',
  payload: [
    { id: 1, name: 'Caneta', price: 3.5},
    { id: 2, name: 'Lápis', price: 2.5},
    { id: 3, name: 'Caderno', price: 12.5},
  ]
}
```

Também existem eventos sem dados: 

```js
{
  type: 'USUARIO_SAIU'
}
```

### Anatomia do **Action Creator**

```js
function makeSomething(param) {
  /* Lógica */
  return {
    type: 'SOME_EVENT_HAPPENED',
    payload: { /*...*/ }
  }
}
```

Exemplo de Action Creator:

```js
function getProducts() {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get('http://...')
  }
}
```

### Anatomia do **Estado**

```js
{
  products: [ /*... */ ],
  auth: { /**/ }
}
```

### Como o **estado** é **gerado**?

Basicamente existe uma função que altera cada estado (os **Reducers**):

```js
{
  products: function() {},
  auth: function() {}
}
```

Basicamente recebem dois parâmetros, o estado anterior e a ação

```js
{
  products: function(previousState, action ) {
    /* Lógica */
    return nextState
  },
  auth: function(previousState, action) {
    /* Lógica */
    return nextState
  }
}
```

### Revisão rápida:

- Evento Click.
- Action Creator
- Action (type, payload)
- Dispatch
- Reducers
- Atualizar interface

****

## <a name="3-2">Criando o Projeto</a>

Pequeno projeto criado para treinar os conceitos.

```console
npx create-react-app 
```

```console
yarn add redux react-redux 
```