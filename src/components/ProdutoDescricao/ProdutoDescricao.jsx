import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProdutoDescricao.css'
import Spinner from '../Spinner/Spinner'
const ProdutoDescricao = () => {
  const params = useParams()
  const [descricao, setDescricao] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((r) => r.json())
      .then((body) => {
        console.log(body)
        setDescricao(body)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <Spinner />
  if (!descricao) return null

  function editarPreco(preco) {
    return `R$ ${preco},00`
  }
  return (
    <div className="produto">
      <h1>{params.id}</h1>
      <div className="descricao-container">
        <img
          className="card-image"
          src={descricao.fotos[0].src}
          alt={`Produto ${params.id}`}
        />
        <div className="descricao">
          <p>{descricao.descricao}</p>
          <p className="preco">{editarPreco(descricao.preco)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProdutoDescricao
