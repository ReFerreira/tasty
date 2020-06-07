import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  height: 100%;
`;
export const ProductList = styled.ul`
  width: 100%;
  max-width: 968px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #e5e5e5;
    border-radius: 4px;
    padding: 10px;
    width: 90%;
    margin: auto;
    img {
      align-self: center;
      width: 100%;
    }

    > strong {
      font-size: 2.1rem;
      line-height: 2rem;
      color: #3d3d4d;
      margin-top: 0.5rem;
    }

    p {
      margin-top: 1rem;
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
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
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
