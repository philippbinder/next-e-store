import { css } from '@emotion/react';
// import * as cheerio from 'cheerio';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// useRouter hier und nicht in index.js, weil diese template Seite ja die Seite sein soll, wo per default bei jedem beliebigen Namen nach products/ hinverlinkt wird.

// faked AddToCart
function AddToCart() {
  console.log('added.');
}

export default function ProdcutTemplate(props) {
  const image = props.singleItem.image;
  console.log(image);
  // const $ = cheerio.load(image);

  return (
    <div>
      <Layout>
        <h1
          css={css`
            text-align: center;
          `}
        >
          {' '}
          Hottest Iron from the Legion!{' '}
        </h1>
        <div
          css={css`
            display: grid;
            grid-template-columns: 50% 50%;
            height: 55vh;
            width: 50vw;
            background-color: white;
            border: 5px solid darkred;
            margin-left: 20%;
            margin-right: 20%;
          `}
        >
          <Image
            // src={$(props.singleItem.image)}
            src={`../public/${props.singleItem.id}`}
            alt="The Gladius, a legionaries trusted weapon."
          />

          <div
            css={css`
              text-align: left;
              padding-top: 12%;
              padding-left: 3.3%;
              font-size: 18px;
              overflow: auto;
            `}
          >
            {/* <Image
              src={spqr}
              alt="SPQR eagle"
              css={css`
                object-fit: contain;
              `}
            /> */}
            Your are looking at the glorious {props.singleItem.name}, plebeian.
            <br />
            <br />
            {props.singleItem.description} <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Price: <i> Import item price </i>
          </div>
        </div>
        <div
          css={css`
            /* margin-left: 45.1vw; */
            margin-left: 39.1vw;
            margin-top: 5vh;
          `}
        >
          <button
            onClick={AddToCart}
            css={css`
              height: 6vh;
              width: 12vw;
              /* font-size: 80%; */
              overflow: hidden;
            `}
          >
            Add to cart.
          </button>
        </div>
      </Layout>
    </div>
  );
}

// export default function Products(props) {
//   // This is to get the url query in the frontend
//   // const router = useRouter();
//   // const { product } = router.query;
//   // console.log(product);

//   return (
//     <Layout>
//       <h1
//         css={css`
//           text-align: center;
//         `}
//       >
//         {' '}
//         Hottest Iron from the Legion!{' '}
//       </h1>
//       <div>
//         Your are looking at the glorious {props.singleItem.name}, plebeian.
//       </div>
//     </Layout>
//   );
// }

export async function getServerSideProps(context) {
  const { getItem } = await import('../../util/database');

  const item = await getItem(context.query.itemId);
  // itemId has to be same name as the [] file in the prodcuts folder
  console.log(context.query.itemId);
  // loads the current selected item, is a unique identifier
  // is the syntax, if query.productId : product is the name of the file, look at 48:35 of https://www.youtube.com/watch?v=ea2QyBEWLuo&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=38 ; with query.id : it pulls the id of the exact object that I want gathered by the function 51:35
  console.log(item);

  // const idFromUrl = context.query.itemId; // for example '2'
  // // 33:00
  // const singleItem = arsenal.find((item) => {
  //   return idFromUrl === item.id;
  //   // loops over the array of the databank and checks if it is the ID of the selected item
  //   // ONCE the value is true (also wenn die aktuelle ID vom ausgewhälten item - idFromUrl - im geloopten array gefunden wurde, ergo das Objekt wurde im array of objects gefunden) singleItem becomes the whole object where the ID from idFromUrl belongs to
  //   // => also wird singleItem nun { id: '2', name: 'Scutum' } für den Fall, dass idFrromUrl '2' ist.

  //   // from find we need to return a true or false, the thing we return through the function here tells if the object is the right one or not 1:10
  // });
  // 59:10 We want to loop over this array of users and find the users that have the same ID that I am passing into the URL
  // für micht user = product
  // We want an object that has these characterstics that we want

  // console.log();

  return {
    props: {
      singleItem: item,
      // will be passed to the page component as props
      // arsenalList: arsenal,  arsenalList is the name, arsenal is the value, therefore the database.js (the faked one); props is the object here and arsenalList the key and arsenal the value
    },
  };
}
// context contains a lot of information about the request and we can grab the url with it like we did with query and route in the frontend
// context comes from next.js

// -----------------
// const getImage = await fetch (

// )
// const image = await
// const $ = cheerio.load(image);
// ------------------
