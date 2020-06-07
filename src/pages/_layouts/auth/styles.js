import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80vh;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 31rem;
  text-align: center;
  background: #e5e5e5;
  height: 30rem;
  padding: 20px;
  border-radius: 4px;

  img {
    height: 6rem;
    width: 6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    input {
      background: #f5f5f5;
      border: 0;
      border-radius: 4px;
      height: 4.4rem;
      padding: 0 15px;
      color: #3d3d4d;
      margin: 0 0 10px;

      &::placeholder {
        color: #3d3d4d;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 1rem;
      font-weight: bold;
    }

    p {
      color: #191;
    }

    button {
      margin: 0.5rem 0 0;
      height: 4.4rem;
      background: #ffb84d;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 1.6rem;
      transition: background 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    a {
      color: #fff;
      margin-top: 1.5rem;
      font-size: 1.6rem;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
