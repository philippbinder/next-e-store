import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function CheckoutPage() {
  return (
    <div>
      <Layout>
        <div
          css={css`
            display: grid;
            grid-template-columns: 50vw;
            grid-template-rows: 5vh;
            gap: 1vh;
          `}
        >
          <div
          // css={css`
          //   margin-bottom: 10%;
          // `}
          >
            <p> Name: </p>
          </div>
          <div>
            <input value="Placeholder Name" />
          </div>
          <div>
            <p> Adress: </p>
          </div>
          <div>
            <input value="Placeholder Adress" />
          </div>
          <div>
            <p> Credit card: </p>
          </div>
          <div>
            <input value="Placeholder credit card" />
          </div>
        </div>
      </Layout>
      <div
        css={css`
          margin-top: 20%;
          border-top: 3px solid black;
          background-color: darkred;
          width: 100%;
          text-align: center;
        `}
      >
        <Link
          href="/thankyou"
          // css={css`
          //   border-top: 2px solid red;
          //   background-color: darkred;
          // `}
        >
          <a> Pay </a>
        </Link>
      </div>
    </div>
  );
}

/*
To do
  - die Elemente des Grid und das div mit Pay sollten alle stets ca 70% des Screens füllen
  - die verschiedenen div Felder sollten einander nicht overlappen wenn zu nah reingezoomt wird
*/
