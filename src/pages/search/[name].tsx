import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import { useState, Suspense } from 'react';

import { Button } from '../../components/Button';
import { PostCardProps } from '../../components/PostsCard';
import { motion } from 'framer-motion';

const PostsCard = dynamic<PostCardProps>(() => import('../../components/PostsCard'));

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const url = 'https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts';

export async function getServerSideProps({ query }: any) {
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

  const [pageIndex, setPageIndex] = useState(1);
  const [orderByRelevance, setOrderByRelevance] = useState(true);
  const [checked, setChecked] = useState(false);

  const { data } = useSWR(
    orderByRelevance
      ? `${url}?search=${router.query.name}&page=${pageIndex}&per_page=9`
      : `${url}?search=${router.query.name}&page=${pageIndex}&per_page=9&orderby=relevance`,
    fetcher,
    {
      initialData: props.posts,
    },
  );

  return (
    <>
      {data.length == 0 ? (
        <div className="w-full h-screen flex justify-center items-center max-w-screen-lg mx-auto px-4 text-title font-bold text-center md:text-2xl">
          ¡No hay artículos relacionados con el término de búsqueda!
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center items-center max-w-screen-lg mx-auto pt-1 md:p-2">
            <motion.input
            whileTap={{scale: 0.8}}
              className="bg-primary p-4 w-4 h-4 border border-primary mr-2 border-primary border-2 rounded border-opacity-50"
              type="checkbox"
              id="horns"
              name="horns"
              onClick={() => {
                setOrderByRelevance(prev => !prev);
                setChecked(prev => !prev);
              }}
            />
            <h1 className="text-title mr-2">Ordenar por relevancia</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-4 max-w-screen-lg mx-auto my-8">
            {data.map(({ id, title, excerpt, featured_media }: any) => (
              <PostsCard id={id} title={title} excerpt={excerpt} featured_media={featured_media}/>
            ))}
          </div>
          <div className="w-full flex justify-between items-center max-w-screen-lg mx-auto p-4">
            <Button onClick={() => setPageIndex(pageIndex - 1)}>Anterior</Button>
            <Button onClick={() => setPageIndex(pageIndex + 1)}>Siguiente</Button> 
          </div>
        </>
      )}
    </>
  );
}
