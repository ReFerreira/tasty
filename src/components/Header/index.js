/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { MdMenu } from 'react-icons/md';
import Menu from '../Menu';

import logo from '../../assets/logo.png';

import {
  Container,
  NavBar,
  TopMenu,
  SideMenu,
  Logo,
  ThemeSwitcher,
} from './styles';

function Header({ toggleTheme }) {
  const [visible, setVisible] = useState(false);
  function toggleShow() {
    setVisible(!visible);
  }
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <TopMenu>
        <NavBar>
          <MdMenu size={24} cursor="pointer" onClick={toggleShow} />
        </NavBar>
        <Logo to="/main">
          <img src={logo} alt="TastyRestaurant" />
          <h2> Tasty Restaurant</h2>
        </Logo>
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
      </TopMenu>
      <SideMenu visible={visible}>
        <Menu />
      </SideMenu>
    </Container>
  );
}

export default Header;
