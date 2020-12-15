# :atom_symbol: React Native

## :robot: Índice

- 1 - [Estrutura de um aplicativo React Native](#01)
- 2 - [Requisições HTTP](#02)

****

## <a name="01">Estrutura de um aplicativo React Native</a>

### **React**

Criado e mantido pelo Facebook o React é uma biblioteca de código aberto com foco em interfaces de usuário em páginas web. Em 2015 o Facebook anunciou o módulo **React Native**, possibilitando em conjunto com o React, a criação de aplicativos para Android e IOS.

O React trabalha baseado em **Componentes**, Cada componentes gerencia seus próprios estados e regras de negócio. Uma aplicação combina todos os componentes criando uma estrutura complexa, mas muito fácil de entender e realizar manutenções.

No **React Native**, você tem **componentes básicos**, que podem ser encapsulados em outros componentes, que encapsula outros componentes... Até compor a sua aplicação, que seria um grande componente.

****

### **Componentes RN**

- **Imports** - Bibliotecas para a criação de um componente.
- **Função/Classe** - O componente em sí com seus estados e componentes filhos (estrutura).
- **Stylesheet** - Folha de estilo para o componente.
- **Exportação** - Exportação do componente para o uso no projeto.

****

### **Estados RN** 

Para gerenciar o estado ele utiliza do conceito de **States**. que é uma "variável global" que trabalha apenas no **contexto do componente**.

****

### **Propriedades RN**

Para que cada componente **converse** com outros componentes, o React utiliza o conceito de **Props** que é um parâmetro que pode ser passado de componente para componente.

*****

## <a name="02">Passando Parâmetros através do navigation</a>