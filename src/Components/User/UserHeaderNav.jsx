import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionarfoto.svg";
import Sair from "../../Assets/sair.svg";
import { useMedia } from "../../Hooks/useMedia";

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`
            ${styles.mobileButton} 
            ${mobileMenu && styles.mobileButtonActive} `}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={` ${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={MinhasFotos} alt="Minhas Fotos" />
          {mobile && "Minas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatistica">
          <img src={Estatisticas} alt="Estatisticas" />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={AdicionarFoto} alt="Adicionar Foto" />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <img src={Sair} alt="Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};
