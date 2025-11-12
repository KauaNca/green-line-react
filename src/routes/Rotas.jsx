// src/routes/Rotas.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/MainLayout.jsx";
import Index from "../pages/Index.jsx";
// import Produtos from "../pages/Produtos.jsx";
// import Sobre from "../pages/Sobre.jsx";
// import Login from "../pages/Login.jsx";
// import Cadastro from "../pages/Cadastro.jsx";

function Rotas() {
  return (
    <Routes>
      {/* Todas as rotas dentro do layout principal */}
      <Route path="/" element={<MainLayout />}>
        {/* Quando o usuário entra em / (sem nada após), ele é redirecionado para /index */}
        <Route index element={<Navigate to="index" replace />} />
        <Route path="index" element={<Index />} />
        {/* <Route path="produtos" element={<Produtos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastrar" element={<Cadastro />} /> */}
      </Route>
    </Routes>
  );
}

export default Rotas;
