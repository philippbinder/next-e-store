import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ProdcutsPage() {
  return (
    <div>
      <Layout>
        <div
          css={css`
            text-align: center;
          `}
        >
          <h1> Hottest Iron from the Legion! </h1>
          <p> The Legion appreciates your support, plebeian.</p>
          <h2
            css={css`
              font-size: 4vh;
              color: black;
            `}
          >
            {' '}
            Behold the Legion's arsenal! The greatest military force of the
            ancient world.{' '}
            <ul>
              <li>
                <Link href="/products/product1">
                  <a> Gladius </a>
                </Link>
              </li>
            </ul>
          </h2>
        </div>
      </Layout>
    </div>
    // Why do I have to link like I am not in the same directory?
  );
}
