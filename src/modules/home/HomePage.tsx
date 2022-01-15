import { useState } from 'react';
import { Union } from 'ts-toolbelt';

import { usePostQuery } from 'services';

import { StyledHomePage, StyledPosts } from './styled';

export const HomePage = () => {
  const [currCursor, setCurrCursor] = useState<Union.Nullable<string>>();
  const { posts } = usePostQuery({ startAfter: currCursor });

  console.log(posts);

  return (
    <StyledHomePage>
      <StyledPosts>ok</StyledPosts>
      <button onClick={() => setCurrCursor(posts[posts.length - 1].value)}>next</button>
    </StyledHomePage>
  );
};
