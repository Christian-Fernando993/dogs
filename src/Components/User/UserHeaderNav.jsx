import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";

import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionarfoto.svg";
import Sair from "../../Assets/sair.svg";
import { useMedia } from "../../Hooks/useMedia";

export const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  const {matches} = window.matchMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

    function handleLogout() {
        userLogout()
        navigate('/login');
    }


  return (
    <>
      <button 
         aria-label="Menu"
        
         className={`${styles.mobileButton}, ${
          mobileMenu &{styles.mobileButton}}`} 
          onClick={() => setMobileMenu(!mobileMenu)}> 
        </button>
      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          {/* <MinhasFotos /> */}
          <img src={MinhasFotos} alt="Minhas Fotos" />
          {mobile && "Minas Fotos"}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          {/* <Estatisticas /> */}
          <img src={Estatisticas} alt="Estatisticas" />
          {mobile && "Estatísticas"}
        </NavLink>

        <NavLink to="/conta/postar">
          {/* <AdicionarFoto /> */}
          <img src={AdicionarFoto} alt="Adicionar Foto" />
          {mobile && "Adicionar Foto"}
        </NavLink>

        <button onClick={handleLogout}>
          {/* <Sair /> */}
          <img src={Sair} alt="Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>




  );
};
