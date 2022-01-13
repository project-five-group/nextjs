import { HomePage } from 'modules/home';
import { POST_QUERY_KEY, getPostCollection, withSSR } from 'services';

export default withSSR(HomePage, async qc => {
  await qc.prefetchQuery(POST_QUERY_KEY, getPostCollection);
});
