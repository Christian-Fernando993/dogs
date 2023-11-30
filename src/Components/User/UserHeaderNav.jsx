import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
// import { styles } from "./UserHeaderNav.module.css";

// import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
// import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
// import { ReactComponent as AdicionarFoto } from "../../Assets/adicionarfoto.svg";
// import { ReactComponent as Sair } from "../../Assets/sair.svg";

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
    function handleLogout() {
        userLogout()
        navigate('/login');
    }
    const [mobile, setMobile] = React.useState(null);

  return (
    <nav>
      <NavLink to="/conta" end>
        {/* <MinhasFotos /> */}
        {mobile && "Minas Fotos"}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        {/* <Estatisticas /> */}
        {mobile && "Estatísticas"}
      </NavLink>

      <NavLink to="/conta/postar">
        {/* <AdicionarFoto /> */}
        {mobile && "Adicionar Foto"}
      </NavLink>

      <button onClick={handleLogout}>
        {/* <Sair /> */}
        {mobile && "Sair"}
      </button>
    </nav>
  );
};
