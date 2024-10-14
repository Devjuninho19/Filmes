import React, { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
const index = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@flix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);
  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      <ul>
       {filmes.map((item) =>{
        return(
            <li key={item.id}>
                <span>{item.title}</span>
                <div>
                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                    <button>Excluir</button>
                </div>

            </li>
        )
       })}
      </ul>
    </div>
  );
};

export default index;
