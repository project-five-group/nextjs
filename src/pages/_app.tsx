import { useState } from 'react';
import { Hydrate, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'normalize.css';

import { createQueryClient } from 'services';
import { ConfigProvider, Layout } from 'components';

const App = ({ Component, pageProps = {} }: AppProps) => {
  const [queryClient] = useState(createQueryClient);
  const { dehydratedState } = pageProps;

  return (
    <>
      <Head>
        <title>Frontend - по здоровому</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <ConfigProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
