import Link from 'next/Link';

export function Nav() {
  return (
    <nav>
      <ul className="flex items-center">
        <li className="text-text">
          <Link href="/">Article</Link>
        </li>
      </ul>
    </nav>
  );
}
