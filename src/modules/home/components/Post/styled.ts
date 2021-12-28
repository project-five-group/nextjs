import styled from 'styled-components';

export const StyledPostTitle = styled.div`
  width: 90%;
  margin: 0 15px 10px auto;
  z-index: 1;
  text-align: end;
  transition: transform 0.3s ease-out;
  transform: scale(1);
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  will-change: transform;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.black};
  transition: opacity 0.3s ease-out;
  will-change: opacity;
  opacity: 0.5;
`;

export const StyledPost = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 0;
  height: 200px;
  padding: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${StyledPostTitle} {
      transform: scale(1.05);
    }

    ${StyledOverlay} {
      opacity: 0.2;
    }
  }
`;

export const StyledPostTag = styled.div`
  width: fit-content;
  padding: 0 5px;
  z-index: 1;
  font-size: 11px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledPostText = styled.span`
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 0 10px ${({ theme }) => theme.colors.primary};
`;
