import { POST_QUERY_KEY, getPostQueryKey } from 'services';
import { createServerSideProps, getCollection } from 'services/server';

export { HomePage as default } from 'modules/home';

export const getServerSideProps = createServerSideProps({
  pageType: 'hybrid',
  async resolveData(qc) {
    // await qc.prefetchQuery(getPostQueryKey(), () => getCollection(db => db.collection(POST_QUERY_KEY).limit(2)));
  },
});
