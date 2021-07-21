import Link from 'next/Link';
import { FaFacebookF } from 'react-icons/fa';

export function Nav() {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Link href="/">Article</Link>
        </li>
      </ul>
    </nav>
  );
}
