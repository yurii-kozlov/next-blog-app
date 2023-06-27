import { Post } from 'types/Post';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class PostsService {
  static async getPosts(): Promise<Post[]> {
    const result = await fetch(`${baseURL}/posts`);

    if (!result.ok) {
      throw new Error('Unable to fetch posts!');
    }

    return result.json();
  }

  static getPostsBySearch = async (searchQuery: string): Promise<Post[]> => {
    const response = await fetch(`${baseURL}/posts?q=${searchQuery}`);

    if (!response.ok) {
      throw new Error('Unable to fetch posts.');
    }

    return response.json();
  }

  static async getPostData(id: string): Promise<Post> {
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
};
