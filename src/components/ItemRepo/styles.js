import styled from "styled-components"

export const ItemContainer = styled.div`
  width: 80%;

  img {
    border: 1px;
    border-radius: 200rem;
    width: 5%;
  }

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: #fafafa80;
    text-decoration: none;
  }

  a.remover {
    font-size: 16px;
    font-weight: 400;
    color: #ff0000;
    cursor: pointer;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`
