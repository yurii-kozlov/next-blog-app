import { Metadata } from 'next';
import { ReactElement } from 'react';
import styles from 'app/blog/[id]/page.module.scss';
import PostsServiceAxios from '@/services/PostsServiceAxios';

type PostProps = {
  params: {
    id: string;
  };
};

type StaticParam = {
  id: string
}

export const revalidate = 100000;

export async function generateStaticParams(): Promise<StaticParam[]> {
  const posts = await PostsServiceAxios.getPosts();

  return posts.map((post) => ({
    id: post.id.toString()
  }))
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await PostsServiceAxios.getPostData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: PostProps): Promise<ReactElement> {
  const post = await PostsServiceAxios.getPostData(id);

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
