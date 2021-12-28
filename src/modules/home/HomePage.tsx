import { usePostQuery } from 'services';

import { StyledHomePage, StyledPosts } from './styled';
import { Post } from './components';

export const HomePage = () => {
  const { posts } = usePostQuery();

  return (
    <StyledHomePage>
      <StyledPosts>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </StyledPosts>
    </StyledHomePage>
  );
};
