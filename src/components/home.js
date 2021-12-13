import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
    <div class="home">
      <div class="img-wrapper">
        <img
          src={
            "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
          }
        />
      </div>
      <div class="banner">
        <h1>Valtercio Santiago</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/skill">Habilidades</Link>
            </li>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
