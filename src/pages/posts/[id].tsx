import { Biography } from '../../components/Biography';
import { Categories } from '../../components/Categories';
import { Content } from '../../components/Content';
import { Image } from '../../components/Image';
import { PublicationDate } from '../../components/PublicationDate';
import { Tags } from '../../components/Tags';
import { Title } from '../../components/Title';
import { PostProps } from '../../lib/wordpressApi/interface';



export default function Post({data}: any) {
  const {title, categories, modified, featured_media, content}:PostProps = data;

  console.log(data)
  

  return (
    <>
      <Title>{title}</Title>
      <Categories>{categories[0].name}</Categories>
      <PublicationDate>{modified}</PublicationDate>
      <Image src={featured_media.large} alt={title}/>
      <Content>{content}</Content>
      <Tags />
      <Biography />
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { id } = query;

  console.log(id);
  const res = await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
