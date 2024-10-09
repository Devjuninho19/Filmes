import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
const index = () => {
  return (
    <header>
      <Link className="logo" to="/">
        Prime Filmes
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus favoritos
      </Link>
    </header>
  );
};

export default index;
