import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Filme from "./Pages/Filme"
import Header from "./components/Header"
import Error from "./Pages/Error"
import Favoritos from "./Pages/Favoritos"
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
