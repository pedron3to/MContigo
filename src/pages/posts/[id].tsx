/* eslint-disable react/no-danger */
import { NextSeo } from 'next-seo';

import { Categories } from '../../components/Categories';
import { Image } from '../../components/Image';
import { PublicationDate } from '../../components/PublicationDate';
import { Title } from '../../components/Title';
import { PostProps } from '../../lib/wordpressApi/interface';

export default function Post({ data }: any) {
  const {
    title,
    categories,
    modified,
    featured_media,
    content,
    metas,
    tags,
  }: PostProps = data;

  const dateFormatted = new Intl.DateTimeFormat('en-ES').format(
    Date.parse(modified),
  );

  return (
    <div className="w-full px-4 max-w-screen-lg mx-auto my-4 md:mt-20">
      <NextSeo
        title={metas.title}
        description={metas.description}
        canonical={metas.canocical}
        openGraph={{
          title: metas['og:title'],
          description: metas['og:description'],
          images: [
            {
              url: metas['og:image'],
              width: metas['og:image:width'],
              height: metas['og:image:height'],
              alt: metas['og:image:alt'],
            },
          ],
        }}
      />
      <Title>{title}</Title>
      <Categories>{categories[0].name}</Categories>
      <PublicationDate>{dateFormatted}</PublicationDate>
      <Image src={featured_media.large} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getServerSideProps({ query }: any) {
  const { id } = query;

  const res = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${id}`,
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
