import { Metadata } from "next";
import { Post } from "types/Post";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function getPostData(id: string): Promise<Post> {
  const response = await fetch(`${baseURL}/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) {
    throw new Error('Unable to fetch posts!');
  }

  return response.json();
}

type PostProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getPostData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getPostData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
