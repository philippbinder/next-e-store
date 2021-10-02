import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  display: flex;
  /* gap: 5px; */
  background-color: darkred;
  color: silver;
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <ul>
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="./products">
              <a> Products </a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a> Cart </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
