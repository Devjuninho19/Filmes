import React,{useEffect, useState} from 'react'
import api from '../../service/api'
import { Link } from 'react-router-dom'
import "./home.css"
const index = () => {
  
  const [ filmes, setFilmes] = useState([])
const [loading, setLoading] = useState(true)
  useEffect(()=>{
    async function loadFilme(){
    const response = await api.get("movie/now_playing", {
      params:{
        api_key:"5dd2d4b6b65d07a72aa5f7bb7798ee02",
        language:"pt-BR",
        page:1,
      }
    })
setFilmes(response.data.results)
setLoading(false)
    }
    loadFilme();
  },[])
if(loading){
  return(
    <div className='loading'>
      <h1>Carregando...</h1>
    </div>
  )
}

  return (
    <div className='container'>
       <div className='lista-filmes'>
{filmes.map((filme)=>{
  return(
    <article key={filme.id}>
      <strong>{filme.title}</strong>
      <img src={`https://image.tmdb.org/t//p/original/${filme.poster_path}`} alt={filme.title} />
      <Link to={`/filme/${filme.id}`}>Acessar</Link>
    </article>
  )
})}
       </div>
    </div>
  )
} 

export default index