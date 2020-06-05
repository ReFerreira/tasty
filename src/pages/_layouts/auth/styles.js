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
  height: 40rem;
  padding: 20px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    input {
      background: #f5f5f5;
      border: 0;
      border-radius: 4px;
      height: 44px;
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
      margin: 0 0 10px;
      font-weight: bold;
    }

    p {
      color: #191;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ffb84d;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 1.6rem;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
