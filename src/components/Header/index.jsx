import { useState } from "react";
import { Container, Content, Button, Menu, MenuOpen, MenuItems } from "./styles";
import logo from "../../assets/logo.svg";
import logout from "../../assets/logout.svg";
import logoadmin from "../../assets/logoadmin.svg";
import { Search } from "../Search";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export function Header({search}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useAuth()
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }


  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleNew() {
    navigate("/new");
  }

  return (
    <Container>
      {isDesktop && (
        <Content>
          <img src={!user.is_admin ? logoadmin : logo} alt="" />
          <Search
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={e => {search(e.target.value)}}

          />
          {!user.is_admin ? (
            <Button onClick={handleNew}>
              Novo Prato
            </Button>
          ) : (
            <>
              <Button type="button">
                <BsReceipt size={24} />
                Pedidos
              </Button>
            </>
          )}
          <img src={logout} alt="Logout" onClick={signOut} />
        </Content>
      )}

      {!isDesktop && !menuOpen ? (
        <Content>
          <Menu>
            <FiMenu size={24} onClick={handleMenuOpen} />
            <img src={user.is_admin ? logoadmin : logo} alt="" />
            <BsReceipt size={24} />
          </Menu>
        </Content>
      ) : null}

      {!isDesktop && menuOpen ? (
        <MenuOpen>
          <FiX size={24} onClick={handleMenuClose} />
          <span>Menu</span>

          <MenuItems>
            <Search
              className="busca"
              placeholder="Busque por pratos ou ingredientes"
              icon={FiSearch}
              onChange={e => {search(e.target.value)}}
            />
            {user.is_admin ? (
              <div className="menuAdmin">
                <span onClick={handleNew}>Novo Prato</span>
                <span onClick={signOut}>Sair</span>
              </div>
            ) : (
              <span onClick={signOut} >Sair</span>
            )}
          </MenuItems>
        </MenuOpen>
      ) : null}
    </Container>
  );
}
