import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import pilum from '../public/images/pilum.png';
import scutum from '../public/images/scutum.png';

// function ToCheckout() {
//   <Link href="../checkout" />;
// }

const priceScutum = 1000;
const pricePilum = 100;
const priceTotal = pricePilum + priceScutum;
console.log(priceTotal);
// function LinkToCheckout() {
//   <Link href="/checkout" />;
// }

export default function CartPage() {
  return (
    <Layout>
      <div>
        <h1> This is your current cart. </h1>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            height: 70vh;
            gap: 5vh;
            /* align-content: center; */
            align-items: center;
            background-color: darkred;
          `}
        >
          Container
          <div
            css={css`
              background-color: white;
              flex-grow: 1;
              width: 70%;
              border: 3px solid black;
              display: grid;
              grid-template-columns: 30% 50%;
            `}
          >
            <Image
              src={scutum}
              alt="The shield that was as much protection as it was a weapon in itself."
            />
            <span> Price: {priceScutum} </span>
          </div>
          <div
            css={css`
              background-color: white;
              flex-grow: 1;
              width: 70%;
              border: 3px solid black;
              display: grid;
              grid-template-columns: 30% 50%;
            `}
          >
            <Image
              src={pilum}
              alt="The shield that was as much protection as it was a weapon itself."
              css={css`
                max-height: 1vh;
                position: relative;
                margin-left: 1000px;
                size: 100% 100%;
              `}
            />
            <span> Price: {pricePilum} </span>
          </div>
          <div
            css={css`
              background-color: white;
              margin-bottom: 20px;
              flex-grow: 1;
              width: 70%;
              border: 3px solid black;
              /* text-align: center; */
            `}
          >
            <span> Total price: {priceTotal} </span>
          </div>
          <div
            css={css`
              text-align: center;
              border-top: 4px solid black;
              flex-grow: 1;
              width: 100%;
              background-color: darkred;
            `}
          >
            <span>
              {' '}
              <Link href="/checkout">
                <a> Buy </a>
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* <button onClick={() => LinkToCheckout()}> Buy </button> */}
      {/* <button onClick={(e) => handleClick(e, "/about")}> Buy </button> */}
    </Layout>
  );
}

/*
To do
- make images fit and not leave div container
- move vairables inside the relevant scope. How do I make it work inside JSX?
- make a button with onClick that takes the user to the checkout page
*/
