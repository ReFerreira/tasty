/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { MdMenu, MdExitToApp, MdShoppingBasket } from 'react-icons/md';
import { FaHome, FaList } from 'react-icons/fa';

import { signOut } from '../../store/modules/auth/actions';

import {
  SideBar,
  Item,
  Container,
  NavBar,
  TopMenu,
  SideMenu,
  Logo,
  ThemeSwitcher,
  ThemeAuth,
  Cart,
} from './styles';
import logo from '../../assets/logo.png';

function Header({ toggleTheme, cartSize }) {
  const name = localStorage.getItem('name');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
    setVisible(!visible);
  }

  function toggleShow() {
    const teste = window.location.pathname;
    setVisible(!visible);
    if (teste === '/') {
      setVisible(false);
    }
  }
  const { colors, title } = useContext(ThemeContext);
  const { pathname } = useLocation();
  return (
    <Container>
      <TopMenu>
        <NavBar>
          {pathname === '/' ? (
            ''
          ) : (
            <MdMenu size="2.4rem" cursor="pointer" onClick={toggleShow} />
          )}
        </NavBar>
        <Logo to="/main">
          <img src={logo} alt="TastyRestaurant" />
          <h2>Tasty Restaurant</h2>
        </Logo>
        {pathname === '/' ? (
          <ThemeAuth>
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, colors.primary)}
              onColor={colors.secundary}
            />
            <p> {title} </p>
          </ThemeAuth>
        ) : (
          <Cart to="/order">
            <div>
              <strong>My orders</strong>
              <span>{cartSize} itens</span>
            </div>
            <MdShoppingBasket size="3.8rem" color="#FFF" />
          </Cart>
        )}
      </TopMenu>
      <SideMenu visible={visible}>
        <SideBar>
          <div>
            <h3>{name}</h3>
          </div>
          <ul>
            <Item to="/main">
              <div>
                <FaHome size="1.5rem" />
                <span>Home</span>
              </div>
            </Item>
            <Item to="/order">
              <div>
                <FaList size="1.5rem" />
                <span>Orders</span>
              </div>
            </Item>
            <Item to="/" onClick={handleSignOut}>
              <div>
                <MdExitToApp size="1.5rem" />
                <span>SignOut</span>
              </div>
            </Item>
            <ThemeSwitcher>
              <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
              />
              <p> {title} </p>
            </ThemeSwitcher>
          </ul>
        </SideBar>
      </SideMenu>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
