import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../../components/Layout';

// import { arsenal } from '../../util/database'; cant be imported from here because node.js wont work in the frontend => GetServerSideProps https://www.youtube.com/watch?v=ea2QyBEWLuo&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=37 36:25

export default function ProductsPage(props) {
  return (
    <div>
      <Layout>
        <div
          css={css`
            text-align: center;
          `}
        >
          {/* <h1> Hottest Iron from the Legion! </h1> */}
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
              {props.arsenalList.map((item) => {
                return (
                  <li key={`item-li-${item.id}`}>
                    Product number {item.id}:
                    <Link href={`/products/${item.id}`}>
                      <a> {item.name} </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </h2>
        </div>
      </Layout>
    </div>
    // Why do I have to link like I am not in the same directory?
  );
}

export async function getServerSideProps() {
  const { getArsenal } = await import('../../util/database');
  // assign the table arsenal to a const
  const arsenal = await getArsenal();

  // console.log(arsenal);
  return {
    props: {
      arsenalList: arsenal, // arsenalList is the name/key, arsenal is the value, therefore the database.js (the faked one); props is the object here and arsenalList the key and arsenal the value
    },
  };
}

// Everything I return with getServerSideProps is going to become the new props in the function ProductsPage

/*
To do
  - change the text before the link by fetching a new property and value from the database that contains a unique introduction sentence for each item
  - transform listed item.name to uppercase
  - in der index.js file alle Artikel auflisten
  - den Artikeln eine ID geben
  - die ID der Artikel muss dann gefetched werden um dann
  - in einer template page {porduct} eingefügt zu werden und mit Bild angezeigt zu werden
    => braucht Database in der die ganzen ID's der Artikel mit dne dazugehörenden Eigenschaften (Name und Bild?) aufgelistet sind

    - warum ist der Pfad in Zeile 31 so wie er ist??? Link href={`/products/${item.name}`}  Link/File path is written from the location of the root because its products/... and not just ... WHY?

https://www.youtube.com/watch?v=ea2QyBEWLuo&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=35
29:50 GetServerSideProps, async not necessecary





Hey José, I was wondering if its possible to use Router with const {user} = router.query , which looks at the url / at the file name in the folder products like that:
If the user chooses a product from an unordered list in the index.js file of the products folder, which would be link to the file of the product (a click on prodcut1 in porducts directs to porducts/product1), it would allow me to use a template file for every item in my shop.
The next step would be to create a Database where each product is listed in with key and value pairs like for example image as the key and the actual image as the value.
Then the template would have a div with an item description and an image of the item which could be fetched from the database based on the url / what {product} acutally is in each instance.
Therefore I would only have to create one single template page for each prodcut with working fechtes and a working database that stores each item in my shop.
Is that possible and if so, is that doable or am I overlooking how hard this would actually be in terms that it's too hard for us students at the  moment  or me at this point?
  */
