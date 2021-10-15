import { css, Global } from '@emotion/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          // *,*::before, *::after is the selector for EVERYTHING
          // removed normal css styles folder, new styles appear from the browser. => remove these browser styles by deleting the content of the styles folder and / the entire styles folder and adding Global styles here.
          body {
            margin: 0;
          }
        `}
      />
      <Head>
        <title>Blacksmith of the Legion</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
