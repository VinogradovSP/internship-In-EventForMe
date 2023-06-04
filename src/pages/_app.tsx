import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { store } from '@/store';
import { Provider } from 'react-redux';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { YMaps } from '@pbe/react-yandex-maps';
import '../styles/scss/theme.scss';


export default function App({ Component, pageProps }: AppProps) {
  let YA_API:string = '';
  if (process.env.NODE_ENV ==='production') {
    YA_API = process.env.NEXT_PUBLIC_YA_API!
  }
  return (
    <Provider store={store}>
      <SSRProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Event4Me</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="author" content="Event4Me" />
          {/* <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <link rel='mask-icon' color='#5bbad5' href='/favicon/safari-pinned-tab.svg' />
          <meta name='msapplication-TileColor' content='#766df4' />
          <meta name='theme-color' content='#ffffff' /> */}
        </Head>
        <YMaps
          query={{
            lang: 'ru_RU',
            apikey: YA_API
          }}
        >
          <Layout>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
        </YMaps>
      </SSRProvider>
    </Provider>
  );
}
