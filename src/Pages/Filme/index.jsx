import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../service/api'
import { toast } from 'react-toastify'
import "./filme.css"
const index = () => {
  const {id} = useParams()
  const navigate = useNavigate()
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
  navigate("/",{replace: true})
  return;
})
}
loadFilme()

return() =>{
  console.log("desmontado")
}
  },[navigate, id])

  function salvarFilme() {
   const minhaLista = localStorage.getItem("@flix")
   let filmeSalvo = JSON.parse(minhaLista) || []

   const hasFilme = filmeSalvo.some((filmeSalvo) => filmeSalvo.id === filme.id)

   if(hasFilme){
    toast.warn("Esse filme já está na sua lista")
    return;
   }
   filmeSalvo.push(filme)
   localStorage.setItem("@flix", JSON.stringify(filmeSalvo))
   toast.success("Filme salvo com sucesso!")
  }
if(loading){
  return(
    <div className='filme-info'>
      <h1>Carregando o filme...</h1>
    </div>
  )
}
  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t//p/original/${filme.backdrop_path}`} alt={filme.title} />
<h3>Sinopse</h3>
<span>{filme.overview}</span>
<strong>Avaliação: {filme.vote_average} /10</strong>
<div className='area-button'>
<button onClick={salvarFilme}>Salvar</button>
<button>
  <a target='blank' href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
</button>
</div>
    </div>
  )
}

export default index