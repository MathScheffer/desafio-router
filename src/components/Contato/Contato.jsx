import React from 'react'
import contato from '../../assets/contato.jpg'
import './Contato.css'

const Contato = () => {
  const infos = ['teste@email.com', '99999-9999', 'Rua teste da Silva, 999']
  return (
    <div className="contato">
      <h1>Contato</h1>
      <div className="descricao-container">
        <img className="card-image" src={contato} alt={`contato`} />
        <div className="descricao">
          <p>
            <span></span>
            Informações
          </p>
          {infos.map((i) => (
            <p className="contato-info">
              <span></span>
              {i}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contato
