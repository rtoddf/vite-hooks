import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  html {
    box-sizing: border-box;
    height: 100%;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  body {
    background-color: #dedede;
    color: #333;
    font-size: 1rem;
    font-weight: 200;
  }

  p {
    font-weight: 400;
  }
`;

export default GlobalStyles;
