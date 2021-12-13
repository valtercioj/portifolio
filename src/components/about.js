import React from "react";
import { Link } from "react-router-dom";
import "../css/about.css";
function About() {
  return (
    <>
      <div id="header">
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

      <div id="main">
        <div id="container">
          <img src={"https://avatars.githubusercontent.com/u/53585971?v=4"} />

          <p>
            Olá, meu nome é Valtercio Santiago, tenho 21 anos e moro em Natal
            RN. Há cerca de 3 anos comecei a me interessar por tecnologia e
            desenvolvimento e desde então venho estudando e me atualizando no
            mercado. Cursando Análise e Desenvolvimento de Sistemas no IFRN.
            Atualmente, estou estudando javascript com nodejs para backend para
            a criação de APIs. Sou apaixonado por jogos e desenvolvimento de
            bot, e gosto de compartilhar meu conhecimento sempre que possível.
          </p>

          <p>
            <span>></span> <strong>Aniversário</strong>: 09 Fevereiro 2000
          </p>
          <p>
            <span>></span> <strong>Telefone</strong>: +55 (084) 98628-7880
          </p>
          <p>
            <span>></span> <strong>Cidade</strong>: Natal RN, Brazil
          </p>
          <p>
            <span>></span> <strong>Email</strong>: juniorvaltercio2015@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
