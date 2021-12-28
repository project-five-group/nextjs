import { TPost } from 'services';

import { StyledOverlay, StyledPost, StyledPostTag, StyledPostText, StyledPostTitle } from './styled';

export const Post = ({ title }: TPost) => {
  return (
    <StyledPost style={{ backgroundImage: `url(https://live.staticflickr.com/4623/28255675539_95a96b168d_b.jpg)` }}>
      <StyledOverlay />
      <StyledPostTag>ES</StyledPostTag>
      <StyledPostTitle>
        <StyledPostText>{title}</StyledPostText>
      </StyledPostTitle>
    </StyledPost>
  );
};
