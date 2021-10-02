import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        sytles={css`
          // removed normal css styles folder, new styles appear from the browser. => remove these browser styles:
          body {
            margin: 220;
            font-size: 300px;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
