import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ThankYouPage() {
  return (
    <Layout>
      <div
        css={css`
          text-align: center;
          background-color: white;
          border: 1vh solid darkred;
          height: 70vh;
          margin-top: 3%;
        `}
      >
        <span
          css={css`
            font-size: 8vh;
            /* margin-top: 201px; */
          `}
        >
          The Legion appreciates your support, plebeian.
        </span>
        <span>
          <Link href="/">
            <a> Return to the landing page of the Ferrarrius Evocatorum </a>
          </Link>
        </span>
      </div>
    </Layout>
  );
}

/*
To do
  - background image of a thankful centurion or something like that
*/
