import { motion } from 'framer-motion';
import Link from 'next/link';

import { PostProps } from '../../lib/wordpressApi/interface';

export type PostCardProps = Pick<
  PostProps,
  'id' | 'title' | 'excerpt' | 'featured_media'
>;

export default function PostsCard({
  featured_media,
  id,
  excerpt,
  title,
}: PostCardProps) {
  return (
    <motion.article
      key={id}
      className="bg-gray-100 rounded-md h-96 shadow-md"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <Link href={`/posts/${id}`}>
        <div className="cursor-pointer">
          <img
            src={featured_media.medium}
            alt=""
            className="h-48 w-full rounded-t-md object-cover my-0"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/posts/${id}`}>
          <div className="cursor-pointer">
            <h1 className="text-lg font-bold text-title">
              {title.length >= 30 ? `${title.substring(0, 25)}...` : title}
            </h1>
          </div>
        </Link>
        <Link href={`/posts/${id}`}>
          <div className="cursor-pointer">
            <p className="text-md mt-4 text-black">
              {excerpt.substring(0, 90)}...
            </p>
          </div>
        </Link>
      </div>
    </motion.article>
  );
}
