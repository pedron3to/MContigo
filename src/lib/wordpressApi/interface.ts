export type PostProps = {
  id: string;
  slug: string;
  title: string;
  featured_media: {
    large: string;
  };
  content: {
    rendered: string;
  };
  categories: [
   { name: string;}
  ];
  excerpt: {
    rendered: string;
  };
  date: string;
  date_gmt: string;
  format: string;
  modified: string;
  modified_gmt: string;
  status: string;
  sticky: boolean;
  type: string;
  link: string;
};
