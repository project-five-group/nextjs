import styled, { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Roboto', sans-serif;
  }

  body, #__next {
    min-width: 375px;
    min-height: 100vh;
    font-size: 16px;
    line-height: 20px;
  }
  
  #__next {
    display: flex;
    flex-direction: column;
   }

  a {
    text-decoration: none;
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
`;

export const StyledFooter = styled.div`
  width: 100%;
  margin-top: auto;
`;
