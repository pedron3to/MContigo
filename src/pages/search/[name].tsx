import { useRouter } from 'next/router'
import Link from 'next/Link';
import useSWR from 'swr';
import axios from 'axios';
import { useState, Suspense } from 'react';
// import { Pagination } from '../components/Pagination';
// import { PostsCard } from '../components/PostsCard';
// import { Sort } from '../components/Sort';

const fetcher = (url: any) => axios.get(url).then(res => res.data);
export const url = 'https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts';

export async function getServerSideProps({query}:any) {
  const posts = await fetcher(`${url}?search=${query.name}&per_page=9`);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Search(props: any) {
  const router = useRouter();

  console.log(router.query.name);
  const [pageIndex, setPageIndex] = useState(0);
  const [orderByRelevance, setOrderByRelevance] = useState(true);
  const [checked, setChecked] = useState(false);

  const { data } = useSWR(
    orderByRelevance ?
    `${url}?search=${router.query.name}&page=${pageIndex}&per_page=9`
    :`${url}?search=${router.query.name}&page=${pageIndex}&per_page=9&orderby=relevance`
    , 
    fetcher,{
    initialData: props.posts
  });

  return (
    <>
     <h1>order by relevance</h1>
    <input type="checkbox" id="horns" name="horns" onClick={() => {setOrderByRelevance(prev => !prev); setChecked(prev => !prev)}}/>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg mx-auto my-8">
      {data.map(({ id, title, excerpt, featured_media }: any) => (
        <article key={id} className="bg-gray-100 rounded-md h-96 shadow-md">
          <Link href={`/posts/${id}`}>
            <a>
              <img
                src={featured_media.medium}
                alt=""
                className="h-48 w-full rounded-t-md object-cover"
              />
            </a>
          </Link>
          <div className="p-4">
            <Link href={`/posts/${id}`}>
              <a>
                <h1 className="text-lg font-bold text-text">
                  {title.length >= 30 ? `${title.substring(0, 32)}...` : title}
                </h1>
              </a>
            </Link>
            <Link href={`/posts/${id}`}>
              <a>
                <p className="text-md mt-4 ">{excerpt.substring(0, 60)}...</p>
              </a>
            </Link>
          </div>
        </article>
      ))}
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
    </>
  );
}
