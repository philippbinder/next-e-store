import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

// Ad cookies: Idea: create a cookie array, map over it and return the total price by multiplying its's frist value (the quantity) with the second (it's price). Stringify two key-value pairs to save them in one cookie (cookies only save one key-value pair) and then decode them (parse?) on the cart page to perform said actions?

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
