import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const arsenal = [
  { id: '1', name: 'Gladius' },
  { id: '2', name: 'Scutum' },
];
// => move to Database

export default function ProdcutsPage() {
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
              {arsenal.map((item) => {
                return (
                  <li key={`item-li-${item.id}`}>
                    {item.name}:
                    <Link
                      href={`/products/${item.name}`} /* Link/File path is written from the location of the root because its products/... and not just ... WHY? */
                    >
                      <a> {item.name} </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <ul>
              <li>
                <Link href="/products/product1">
                  <a> Gladius </a>
                </Link>
              </li>
            </ul> */}
          </h2>
        </div>
      </Layout>
    </div>
    // Why do I have to link like I am not in the same directory?
  );
}

/*
To do
  - warum ist der Pfad in Zeile 37 so wie er ist???
  - transform listed item.name to uppercase
  - in der index.js file alle Artikel auflisten
  - den Artikeln eine ID geben
  - die ID der Artikel muss dann gefetched werden um dann
  - in einer template page {porduct} eingefügt zu werden und mit Bild angezeigt zu werden
    => braucht Database in der die ganzen ID's der Artikel mit dne dazugehörenden Eigenschaften (Name und Bild?) aufgelistet sind


Hey José, I was wondering if its possible to use Router with const {user} = router.query , which looks at the url / at the file name in folderproducts like that:
If the user choses a product from an unordered list in the index.js file of the products folder, which would be link to the file of the product (a click on prodcut1 in porducts directs to porducts/product1), it would allow me to use a template file for every item in my shop.
The next step would be to create a Database where each product is listed in with key and value pairs like for example image as the key and the actual image as the value.
Then the template would have a div with an item description and an image of the item which could be fetched from the database based on the url / what {product} acutally is in each instance.
Therefore I would only have to create one single template page for each prodcut with working fechtes and a working database that stores each item in my shop.
Is that possible and if so, is that doable or am I overlooking how hard this would actually be in terms that it's too hard for us students at the  moment  or me at this point?
  */
