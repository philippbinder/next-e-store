import { css } from '@emotion/react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import gladius from '../../public/images/gladius.png';

// import spqr from '../../public/images/spqr.png';

function AddToCart() {
  console.log('added.');
}

export default function ProdcutsPage() {
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
            src={gladius}
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
            The Gladius is the trusted weapon of every legionary. Combined with
            the Scutum it makes for a deadly weapon, striking out at the
            barbarians from the cover of the Scutum. They never see it coming.
            If you find yourself cornered by some barbarian filth, you can also
            rely on your trusted Gladius, since it also makes for a good
            slashing weapon. Truly, roma invicta!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Price: <i> 99 denarii </i>
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

/*
To do:
- align all elements on the same x-axis value
- make sure that the text of description of the Gladius doesn't flow out of the div without use of oferlow - would have to auto-size the text?
- fix bug that cuases an error 404 once the porducts link the nav is clicked
*/
