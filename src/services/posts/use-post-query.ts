import { useQuery } from 'react-query';

import { queryFetcher } from '../helpers';

export type TPost = {
  id: number;
  title: string;
  userId: number;
  content: string;
  likes: number;
  hits: number;
  categoryId: number;
  imageUrl: string;
};

export const POST_QUERY_KEY = '/posts';

const INITIAL_DATA: TPost[] = [];

export const usePostQuery = () => {
  const { data, ...rest } = useQuery<TPost[]>(POST_QUERY_KEY, queryFetcher);

  return {
    posts: data ?? INITIAL_DATA,
    ...rest,
  };
};
