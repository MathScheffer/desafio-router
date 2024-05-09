import React from 'react'
import './Produto.css'
import { Link, NavLink } from 'react-router-dom'

const Produtos = ({ produtos }) => {
  if (!produtos) return null
  return (
    <>
      <h1>Produtos</h1>
      <div className="produtos-container">
        {produtos.map((p) => (
          <div key={p.id} className="produtos-card">
            <p>{p.nome}</p>
            <NavLink to={`produto/${p.id}`}>
              <img
                className="card-image"
                src={p.fotos[0].src}
                alt={p.fotos[0].nome}
              />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}

export default Produtos
