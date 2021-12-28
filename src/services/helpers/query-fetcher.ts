import { QueryFunctionContext, QueryKey } from 'react-query/types/core/types';

import { apiClient } from '../service';

export const queryFetcher = <TQueryKey extends QueryKey = QueryKey>({
  queryKey,
}: QueryFunctionContext<TQueryKey>): Promise<any> => {
  const [key, params] = queryKey as [string, Record<string, unknown> | void];

  return apiClient.get(key, { params });
};
