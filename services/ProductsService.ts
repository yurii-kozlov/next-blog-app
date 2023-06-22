import { productsApi } from 'http/api';
import { Product } from 'types/Product';

export default class ProductsService {
  static async getProducts(): Promise<Product[]> {
    try {
      const response = await productsApi.get('/products');

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch products')
    }
  }
};
