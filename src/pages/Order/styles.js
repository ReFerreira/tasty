import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  padding: 2rem;
  background: #e5e5e5;
  border-radius: 4px;
  max-width: 750px;
  width: 100%;

  footer {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
      border: 0;
      border-radius: 4px;
      padding: 1.2rem 1.2rem;
      font-weight: bold;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
export const ProductTable = styled.div`
  max-width: 700px;
  width: 90%;

  thead th {
    color: #999;
    text-align: left;
    padding: 0.4rem;
  }

  tbody td {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 7.3rem;
  }

  strong {
    color: #3d3d4d;
    display: block;
  }

  span {
    color: #191;
    display: block;
    margin-top: 5px;
    font-weight: bold;
    font-size: 1.8rem;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 0.2rem;
      width: 4.5rem;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0.2rem;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    color: #191;
    font-size: 2.8rem;
    margin-left: 0.5rem;
  }
`;

export const Warn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  flex-direction: column;

  img {
    color: ${(props) => props.theme.colors.text};
    max-width: 450px;
    width: 90%;
  }
`;
