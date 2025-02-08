import { client as apiClient } from "@/services/ApiClient";

export default class FavouriteService {
  private baseUrl = "favourites"; // API endpoint for favourites

  async addFavourite(userId: string, productId: string, token: string) {
    return apiClient.post(`${this.baseUrl}`, { userId, productId }, token);
  }

  async removeFavourite(favouriteId: string, token: string) {
    return apiClient.delete(`${this.baseUrl}/${favouriteId}`, undefined, token);
  }

  async getFavouritesByUser(userId: string, token: string) {
    return apiClient.get(`${this.baseUrl}/${userId}`, undefined, token);
  }

  async getFavouritesByProduct(productId: string, token: string) {
    return apiClient.get(`${this.baseUrl}/product/${productId}`, undefined, token);
  }
}

export const favouriteService = new FavouriteService();
