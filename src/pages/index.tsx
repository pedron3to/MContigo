import unfetch from 'isomorphic-unfetch';
import Link from 'next/Link';
import useSWR from 'swr';
// import { Pagination } from '../components/Pagination';
// import { PostsCard } from '../components/PostsCard';
// import { Sort } from '../components/Sort';

export async function getStaticProps() {
  const res = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts?per_page=9`,
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg mx-auto my-8">
      {data.map(({ id, title, excerpt, featured_media, permalink }: any) => (
        <article key={id} className="bg-gray-100 rounded-md h-96 shadow-md">
          <Link href={`/posts${permalink}`}>
            <a>
              <img
                src={featured_media.medium}
                alt=""
                className="h-48 w-full rounded-t-md object-cover"
              />
            </a>
          </Link>
          <div className="p-4">
            <Link href={`/posts${permalink}`}>
              <a>
                <h1 className="text-lg font-bold text-text">
                  {title.length >= 30 ? `${title.substring(0, 32)}...` : title}
                </h1>
              </a>
            </Link>
            <Link href={`/posts${permalink}`}>
              <a>
                <p className="text-lg mt-4 ">{excerpt.substring(0, 60)}...</p>
              </a>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
