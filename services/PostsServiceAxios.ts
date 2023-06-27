import axios from 'axios';
import { Post } from 'types/Post';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Accept-Encoding': 'gzip, deflate, br'
  }
};

export default class PostsServiceAxios {
  static async getPosts(): Promise<Post[]> {
    try {
      const response = await axios.get(`${baseURL}/posts`, config);

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
      const response = await axios.get(`${baseURL}/posts?q=${searchQuery}`, config);

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
      const response = await axios.get(`${baseURL}/posts/${id}`, config);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('Unable to fetch posts!')
    }
  }
};
