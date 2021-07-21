import Head from 'next/head';
import React from 'react';
import { Pagination } from '../components/Pagination';
import { PostsCard } from '../components/PostsCard';
import { Sort } from '../components/Sort';
import useSWR from 'swr';

export default function HomePage() {
  const { data } = useSWR(
    'https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts?page=2',
  );

  // /home - metadados
  console.log(data);

  return (
    <>
      <Head>drdr</Head>
      <Sort />
      <PostsCard />
      <Pagination />
    </>
  );
}
