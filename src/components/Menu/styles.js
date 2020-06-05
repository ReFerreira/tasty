import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBar = styled.div`
  background: ${(props) => props.theme.colors.primary};
  list-style: none;
  position: fixed;
  width: 20rem;
  height: 100%;
  transition: all 0.3s ease;
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
    margin: 30px;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    position: relative;
    margin-bottom: 1px;
    color: #eee;

    button {
      cursor: pointer;
      background: ${(props) => props.theme.colors.primary};
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
    margin-right: 10px;
    display: inline-block;
  }

  span {
    text-transform: uppercase;
    display: inline-block;
  }
`;
