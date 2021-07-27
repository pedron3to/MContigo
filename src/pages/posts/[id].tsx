/* import { Biography } from '../../components/Biography'; */
import { Categories } from '../../components/Categories';
/* import { Content } from '../../components/Content'; */
import { Image } from '../../components/Image';
import { PublicationDate } from '../../components/PublicationDate';
/* import { Tags } from '../../components/Tags'; */
import { Title } from '../../components/Title';
import { PostProps } from '../../lib/wordpressApi/interface';
import { NextSeo } from 'next-seo';

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
    <div className="w-full px-4 max-w-screen-lg mx-auto mt-4 md:mt-20">
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
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      {tags.map(({ name }: any) => (
        <div>{name}</div>
      ))}
     {/*  <Tags />
      <Biography /> */}
    </div>
  );
}

export async function getServerSideProps({ query }: any) {
  const { id } = query;

  const res = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${id}`,
  );
  const data = await res.json();

  console.log(data.tags);

  return {
    props: { data },
  };
}
