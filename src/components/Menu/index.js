import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "./styles.css";

function Menu() {
  return (
    <header>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <GiHamburgerMenu size={35} />
      </label>
      <nav className="menu">
        <div className="navigation">
          <Link className="linkMenu" to="/">
            Principal
            <hr />
          </Link>
          <Link className="linkMenu" to="/evolucao">
            Evolução
            <hr />
          </Link>
          <Link className="linkMenu" to="/habilidades">
            Habilidades
            <hr />
          </Link>
          <Link className="linkMenu" to="/equipamentos">
            Equipamentos
            <hr />
          </Link>
          <Link className="linkMenu" to="/companheiros">
            Companheiros
            <hr />
          </Link>
          <Link className="linkMenu" to="/export">
            Exportar
            <hr />
          </Link>
          <Link className="linkMenu" to="/">
            Salvar
            <hr />
          </Link>
          <Link className="linkMenu" to="/">
            Voltar
            <hr />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
