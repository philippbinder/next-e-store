import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    // <div
    //   css={css`
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: flex-end;
    //     align-content: center;
    //   `}
    // >
    <>
      <Layout>
        <h1> Landing Page </h1>
        <div
          css={css`
            background-image: url('https://www.akg-images.co.uk/Docs/AKG/Media/TR3_WATERMARKED/c/d/f/b/AKG297741.jpg');
            height: 50vh;
            width: 50vw;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-left: 25vw;
            margin-right: 30vw;
            /* WHY is the margin left and right STILL different? I uses 20 PERCENTAGE or the same VW. */
          `}
        >
          <div
            css={css`
              /* display: inline-block; */
              /* vertical-align: middle; */
              text-align: center;
              /* line-height: normal; */
              color: white;
              font-size: 7vh;
              padding-top: 18%;
            `}
          >
            Work in progress.
          </div>
        </div>
      </Layout>
      <footer>
        <div
          css={css`
            border: 2px solid black;
            /* height: 3vh;
            width: 10vw; */
            /* align-content: center;
            justify-content: center;
            justify-items: center;
            align-items: center;
            justify-self: center; */
            /*  margin-left: 20%;
               margin-right: 20%; */
          `}
        >
          <div
            css={css`
              /* height: 100%;
              width: 100%; */
              background-color: darkred;
              /* display: flex; */
              /* overflow: hidden; */
              text-align: center;
              font-size: 4vh;
            `}
          >
            <Link href="/products">
              <a> Products </a>
            </Link>
          </div>
        </div>
      </footer>
      {/* // </div> */}
    </>
  );
}
