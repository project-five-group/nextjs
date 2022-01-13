import { POST_QUERY_KEY, getPostCollection } from 'services';
import { createServerSideProps } from 'services/server';

export { HomePage as default } from 'modules/home';

export const getServerSideProps = createServerSideProps({
  pageType: 'hybrid',
  async resolveData(qc) {
    await qc.prefetchQuery(POST_QUERY_KEY, getPostCollection);
  },
});
