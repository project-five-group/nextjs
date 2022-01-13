import { useState } from 'react';
import { Hydrate, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'normalize.css';

import { createQueryClient, useUserVerify } from 'services';
import { ConfigProvider, Layout } from 'components';

const VerifyUser = () => useUserVerify();

const App = ({ Component, pageProps = {} }: AppProps) => {
  const [queryClient] = useState(createQueryClient);
  const { dehydratedState, ...rest } = pageProps;
  console.log(pageProps);

  return (
    <>
      <Head>
        <title>Frontend - по здоровому</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <VerifyUser />
          <ConfigProvider>
            <Layout>
              <Component {...rest} />
            </Layout>
          </ConfigProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
