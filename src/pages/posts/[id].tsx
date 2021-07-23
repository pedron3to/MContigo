import { url } from '..';
import { Biography } from '../../components/Biography';
import { Categories } from '../../components/Categories';
import { Content } from '../../components/Content';
import { Image } from '../../components/Image';
import { PublicationDate } from '../../components/PublicationDate';
import { Tags } from '../../components/Tags';
import { Title } from '../../components/Title';

export default function Post() {
  return (
    <>
      <Title />
      <Categories />
      <PublicationDate />
      <Image />
      <Content />
      <Tags />
      <Biography />
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { id } = query;

  console.log(id);
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();

  console.log(data);
  return {
    props: { data },
  };
}
