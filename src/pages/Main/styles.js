import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  height: 100%;
`;
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
  /* max-width: 30rem; */

  li {
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    border-radius: 4px;
    padding: 10px;
    max-width: 28rem;

    img {
      align-self: center;
      max-width: 100%;
    }

    > strong {
      font-size: 2.1rem;
      line-height: 2rem;
      color: #3d3d4d;
      margin-top: 0.5rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: #3d3d4d;
    }

    > span {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0.5rem 0 2rem;
      color: #191;
    }

    button {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
      margin-top: auto;
      border: 0;
      border-radius: 4px;
      overflow: hidden;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3d3d4d')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 0.5rem;
        }
      }

      span {
        flex: 1;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  strong {
    font-size: 36px;
    color: ${(props) => props.theme.colors.secundary};
  }
`;
