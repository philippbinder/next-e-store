import { css } from '@emotion/react';
import Layout from '../components/Layout';

export default function ProdcutsPage() {
  return (
    <div>
      <h1> Hottest Iron from the Legion! </h1>
      <Layout>
        <p> The Legion appreciates your support, plebeian.</p>
        <div
          css={css`
            display: grid;
            grid-template-columns: 50% 50%;
            height: 55vh;
            width: 50vw;
            background-color: green;
            margin-left: 20%;
            margin-right: 20%;
          `}
        >
          <div
            css={css`
              background-color: purple;
            `}
          >
            Test
          </div>
          <div
            css={css`
              background-color: orange;
            `}
          >
            Test
          </div>
        </div>
      </Layout>
    </div>
  );
}
