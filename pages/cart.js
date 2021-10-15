import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import cookiesArray from './products/[itemId].js';

// Ad cookies: Idea: create a cookie array, map over it and return the total price by multiplying its's frist value (the quantity) with the second (it's price). Stringify two key-value pairs to save them in one cookie (cookies only save one key-value pair) and then decode them (parse?) on the cart page to perform said actions?
// Nächsten Schritte: Cookies als String mit Info??? Als Array?? Function die cookies aufruft und checkt ob die ID / das Produkt valid ist und anschließend den Gesamtpreis ausrechnet
// Hint: dieser Approach ist schlecht wenn ich viele cookies habe, weil jedes mal ein eigenständiges Cookie erstellt wird.

/*
Step 1 done: alle cookies in ein Array, damit die function nur ein Ziel haben muss
Step 2: Function schreiben, die in der Cart besagtes Array aufruft und
    1tens: alle cookies überprüft ob sie auch tatsächlich existieren, Cart darf NUR products anzeigen die es auch tatsächlich gibt, keine die der User erfindet oder modifiziert
      => mit database abchecken ob diese ID auch wirklich existiert und ist das richtige Produkt ist
    2tens: die Preise der einzelnen Cookies (der Produkte) aufruft und mit der Qunatität mulpiziert und anschließend jedes Teilergebnis zusammenrechnet
*/

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
  console.log(cookiesArray);
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
// export async function getServerSideProps(context) {
//   const cookiesArray = Object.entries(context.req.cookies);
//   console.log(cookiesArray);

//   return {
//     props: { singleItem: item },
//   };
// }

/*
To do
- make images fit and not leave div container
- move vairables inside the relevant scope. How do I make it work inside JSX?
- make a button with onClick that takes the user to the checkout page
*/

// function die über alle cookie ids geht, also 1-9 und, wenn das cookie existiert, alle existierenden cookies in einem array speichert => heißt ich muss auf das Backend zugreifen. Brauche ich extra eine function für getServerSideProps?
// anschließend soll diese array aufgreufen werden um alel cookies darin ihren Preis zuzuordnen

// const allIDs = databaseaccess forEach each single products ID === props.singleItem.id
// const cookieIDs =
// function cookieGetter () {
//   Cookies.get (props.singleItem.allIDs
// }
