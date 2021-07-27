import axios from 'axios';
import dynamic from 'next/dynamic'
import useSWR from 'swr';
import { useState } from 'react';
import { Button } from '../components/Button';
import { PostCardProps } from '../components/PostsCard';

const PostsCard = dynamic<PostCardProps>(() => import('../components/PostsCard'));

const fetcher = (url: any) => axios.get(url).then(res => res.data);
export const url = 'https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts';


export default function Home(props: any) {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error} = useSWR(`${url}?per_page=9&page=${pageIndex}`, fetcher, {
    initialData: props.posts,
  });

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-4 max-w-screen-lg mx-auto my-8">
        {data.map(({ id, title, excerpt, featured_media }: any) => (
          <PostsCard featured_media={featured_media} id={id} title={title} excerpt={excerpt}/>
          ))}
      </div>
      <div className="w-full flex justify-between items-center max-w-screen-lg mx-auto p-4">
        <Button onClick={() => setPageIndex(pageIndex - 1)}>Anterior</Button>
        <Button onClick={() => setPageIndex(pageIndex + 1)}>Siguiente</Button> 
      </div>
    </>
  );
}

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