import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  /* Adicione seus estilos de reset aqui */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;


  }
  body{
    background-color: #D9CDF7;
    color: #271A45;
  }
  /* Remova a margem padrão do elemento ul */
  ul {
    list-style: none;
  }
  /* Remova o estilo de borda padrão dos links */
  a {
    text-decoration: none;
    color: inherit;
  }
  /* Remova o estilo de borda padrão dos botões */
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
