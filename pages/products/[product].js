import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// useRouter hier und nicht in index.js, weil diese template Seite ja die Seite sein soll, wo per default bei jedem beliebigen Namen nach products/ hinverlinkt wird.

export default function Products() {
  const router = useRouter();
  const { product } = router.query;

  console.log(product);

  return (
    <Layout>
      <h1
        css={css`
          text-align: center;
        `}
      >
        {' '}
        Hottest Iron from the Legion!{' '}
      </h1>
      <div>Your are looking at the {}, plebeian.</div>
    </Layout>
  );
}
