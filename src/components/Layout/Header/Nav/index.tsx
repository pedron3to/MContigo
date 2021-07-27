import Link from 'next/link';

export function Nav() {
  return (
    <nav>
      <div className="flex items-center">
        <Link href="/">
          <div className="text-title hover:text-primary cursor-pointer font-bold">
            Article
          </div>
        </Link>
      </div>
    </nav>
  );
}
