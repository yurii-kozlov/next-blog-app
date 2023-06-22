import { Metadata } from 'next';
import { Post } from 'types/Post';
import PostsService from 'services/PostsService';
import styles from 'app/blog/[id]/page.module.scss';

type PostProps = {
  params: {
    id: string;
  };
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await PostsService.getPostData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await PostsService.getPostData(id);

  return (
    <div className={styles.postWrapper}>
      <h1 className={styles.title}>
        {post.title}
      </h1>
      <p className={styles.postDescription}>
        {post.body}
      </p>
    </div>
  );
};
