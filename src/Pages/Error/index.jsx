import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <div className='container'>
        <h1>404</h1>
        <h2>Ops...Página não encontrada</h2>
        <Link to="/">Voltar</Link>
    </div>
  )
}

export default index