import { client } from '@/services/ApiClient';
import type { Product } from '@/types';

export class ProductApiService {
  static async fetchProducts(): Promise<Product[]> {
    try {
      const response : any = await client.get("products");
      return response.products || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
}