import axios from 'axios';
import { Post } from 'types/Post';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class PostsServiceAxios {
  static async getPosts(): Promise<Post[]> {
    try {
      const response = await axios.get(`${baseURL}/posts`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('Unable to fetch posts!')
    }
  }

  static getPostsBySearch = async (searchQuery: string): Promise<Post[]> => {
    try {
      const response = await axios.get(`${baseURL}/posts?q=${searchQuery}`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('Unable to fetch posts!')
    }
  }

  static async getPostData(id: string): Promise<Post> {
    try {
      const response = await axios.get(`${baseURL}/posts/${id}`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('Unable to fetch posts!')
    }
  }
};
