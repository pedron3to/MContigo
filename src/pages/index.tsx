import Link from 'next/Link';
import useSWR from 'swr';
import axios from 'axios';
import { useState, Suspense } from 'react';
import { Search } from '../components/Search';
// import { Pagination } from '../components/Pagination';
// import { PostsCard } from '../components/PostsCard';
// import { Sort } from '../components/Sort';

const fetcher = (url: any) => axios.get(url).then(res => res.data);
export const url = 'https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts';

export async function getStaticProps() {
  const posts = await fetcher(`${url}?per_page=9`);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props: any) {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useSWR(`${url}?per_page=9&page=${pageIndex}`, fetcher, {
    initialData: props.posts,
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-4 max-w-screen-lg mx-auto my-8">
        {data.map(({ id, title, excerpt, featured_media }: any) => (
          <article key={id} className="bg-gray-100 rounded-md h-96 shadow-md">
            <Link href={`/posts/${id}`}>
              <div className="cursor-pointer">
                <img
                  src={featured_media.medium}
                  alt=""
                  className="h-48 w-full rounded-t-md object-cover my-0"
                />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/posts/${id}`}>
                <div className="cursor-pointer">
                  <h1 className="text-lg font-bold text-title">
                    {title.length >= 30
                      ? `${title.substring(0, 25)}...`
                      : title}
                  </h1>
                </div>
              </Link>
              <Link href={`/posts/${id}`}>
                <div className="cursor-pointer">
                  <p className="text-md mt-4 text-black">
                    {excerpt.substring(0, 90)}...
                  </p>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="w-full flex justify-between items-center max-w-screen-lg mx-auto p-4">
        <button
          className="bg-primary text-white hover:bg-title px-4 py-1 rounded-md"
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          Previous
        </button>
        <button
          className="bg-primary text-white hover:bg-title px-4 py-1 rounded-md"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
