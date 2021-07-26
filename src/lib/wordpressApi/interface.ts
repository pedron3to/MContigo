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
  categories: [{ name: string }];
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
  metas: {
    title: string;
    description: string;
    canocical: string;
    'og:title': string;
    'og:description': string;
    'og:image': string;
    'og:image:alt': string;
    'og:image:width': number;
    'og:image:height': number;
    'og:site_name': number;
    'twitter:creator': number;
    'twitter:site': number;
  };
  tags: [
    {
      id: string;
      name: string;
      slug: string;
      permalink: string;
      link: string;
    },
  ];
};
