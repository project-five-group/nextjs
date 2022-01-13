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
    background-color: ${({ theme }) => theme.colors.light};
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

export const StyledLayout = styled.div`
  position: relative;
  display: flex;
`;

export const StyledContent = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSideBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledRightBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.subLight};
`;
