import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

// import grimLegionaries from '../public/images/grimLegionaries.png';

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
          /* background-image: url('../public/images/grimLegionaries.png'); */
        `}
      >
        <div
          css={css`
            height: 100%;
            width: 100%;
            background-image: url('https://wallpaperaccess.com/full/103204.jpg');
            background-size: contain;
            background-repeat: no-repeat;
            z-index: -1;
            /* opacity: ; */
            margin-left: 25%;
            /* margin-right: auto; */
          `}
        />
        `
        {/* <div
          css={css`
            z-index: -1;
            object-fit: fill;
          `}
        >
          <Image
            src={grimLegionaries}
            // src="/pages/../public/images/grimLegionaries.png"
            alt="Legion"
            css={css`
              z-index: -1;
            `}
          />
        </div> */}
        <div
          css={css`
            font-size: 8vh;
            padding-top: 14vh;
            z-index: 1;
            /* margin-top: 201px; */
          `}
        >
          The Legion appreciates your support, plebeian.
        </div>
        <div
          css={css`
            margin-top: 30vh;
            font-size: 4vh;
            z-index: 1;
          `}
        >
          <Link href="/">
            <a> Return to the landing page of the Ferrarrius Evocatorum </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

/*
To do
  - background image of a thankful centurion or something like that´
  - relative link with background image or image is just not working - WHY???
  - https://www.youtube.com/watch?v=NZNvW36xiOE&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=33 1:20:45 trick for auto sizing image
*/
