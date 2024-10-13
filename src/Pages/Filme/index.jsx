import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../../service/api'
const index = () => {
  const {id} = useParams()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
async function loadFilme(){
await api.get(`/movie/${id}`, {
  params:{
    api_key:"5dd2d4b6b65d07a72aa5f7bb7798ee02",
    language:"pt-BR",
  }
})
.then((res)=>{
setFilme(res.data)
setLoading(false)
})
.catch(()=>{
  console.log("FILME NÃO ENCONTRADO")
})
}
loadFilme()

return() =>{
  console.log("desmontado")
}
  },[])
if(loading){
  return(
    <div className='filme-info'>
      <h1>Carregando o filme...</h1>
    </div>
  )
}
  return (
    <div>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t//p/original/${filme.backdrop_path}`} alt={filme.title} />
<h3>Sinopse</h3>
<span>{filme.overview}</span>
<strong>Avaliação: {filme.vote_average} /10</strong>
    </div>
  )
}

export default index