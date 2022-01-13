import styled from 'styled-components';

export const StyledHomePage = styled.div`
  width: 100%;
  height: 200vh;
  padding: 15px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 350px);
  gap: 20px;
`;
