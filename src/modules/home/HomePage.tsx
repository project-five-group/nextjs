import { useState } from 'react';
import { Union } from 'ts-toolbelt';
import { QueryDocumentSnapshot } from '@firebase/firestore';

import { usePostQuery, useUserQuery } from 'services';

import { StyledHomePage, StyledPosts } from './styled';
// import { Post } from './components';

export const HomePage = () => {
  const [currCursor, setCurrCursor] = useState<Union.Nullable<QueryDocumentSnapshot>>();
  const { posts } = usePostQuery(currCursor);
  const { user } = useUserQuery();

  console.log(user);

  return (
    <StyledHomePage>
      <StyledPosts>ok</StyledPosts>
      {/*<button onClick={() => setCurrCursor(posts[posts.length - 1]._doc)}>next</button>*/}
    </StyledHomePage>
  );
};
