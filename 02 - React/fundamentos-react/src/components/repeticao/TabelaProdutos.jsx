import React from 'react';

import './TabelaProdutos.css'

import produtos from '../../data/produtos'; 

export default () => {

  const products = produtos.map((produto, i) => {
    return <tr key={produto.id} className={i % 2 ? 'par' : ''}>
      <td>{produto.id}</td>
      <td>{produto.name}</td>
      <td>{produto.value}</td>
    </tr>
  })

  return (
    <div className="tabelaProdutos">
      <table>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        {products}

      </table>
    </div>
  )
}