import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const NavBar = styled.div`
  svg {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const TopMenu = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

export const SideMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  transition: opacity 0.3s ease;
  height: 100%;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 6rem;
    width: 6rem;
    margin-left: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-left: 2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 1rem;
  margin-top: 50vh;
  p {
    margin-left: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
  }
`;
export const ThemeAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  p {
    margin-left: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const SideBar = styled.div`
  background: ${(props) => props.theme.colors.primary};
  list-style: none;
  position: absolute;
  max-width: 20rem;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.4rem;
      margin: auto;
    }
  }
`;

export const Item = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #ffb84d;
  }

  div {
    margin: 3rem;
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
    /* position: relative; */
    margin-bottom: 1px;
    color: #eee;

    span {
      font-size: 1.5rem;
    }
  }

  div::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 1rem;
    height: 100%;
    display: none;
    background: ${(props) => props.theme.colors.primary};
  }
  svg {
    margin-right: 1rem;
    display: inline-block;
  }

  span {
    display: inline-block;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin: 1rem;

    strong {
      display: block;
      color: ${(props) => props.theme.colors.text};
    }

    span {
      font-size: 1.2rem;
      color: #999;
    }
  }
`;
