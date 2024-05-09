import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './Header.css'
import Header from './Header'
import Container from './Container'
import AppContainer from './AppContainer'
import Contato from './Contato/Contato'
import Produtos from './Produtos/Produtos'
import ProdutoDescricao from './ProdutoDescricao/ProdutoDescricao'
import Spinner from './Spinner/Spinner'
import NotFound from './NotFound/NotFound'
const Home = () => {
  const [produtos, setProdutos] = useState()
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((body) => {
        setProdutos(body)
        console.log(body)
        setLoading(false)
      })
  }, [])

  if (loading) return <Spinner />
  return (
    <>
      <AppContainer>
        <Container>
          <Header />
        </Container>

        <Container>
          <Routes>
            <Route path="/" element={<Produtos produtos={produtos} />} />
            <Route path="spinner" element={<Spinner />} />
            <Route path="contato" element={<Contato />} />
            <Route path="produto/:id" element={<ProdutoDescricao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </AppContainer>
    </>
  )
}

export default Home
