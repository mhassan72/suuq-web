// services/ApiClient.ts
import axios, { type AxiosRequestConfig, type AxiosResponse, AxiosError } from "axios";
import { baseURL } from "@/config/environment";

// Add response type interface
interface ApiResponse<T = any> {
  data: T;
  message?: string;
  user?: any;
  token?: string;
}

export default class APIClient {
  public BaseUrl = baseURL;

  constructor() {
    this.BaseUrl = baseURL;
  }

  async request<T = any>(
    method: string = "GET",
    url: string,
    data?: any,
    token?: string,
    headers: Record<string, string> = { "Content-Type": "application/json" }
  ): Promise<ApiResponse<T>> {
    if (token) {
      headers["Authorization"] = `${token}`;
    }

    const options: AxiosRequestConfig = {
      method: method,
      url: `${this.BaseUrl}${url}`,
      data: data,
      headers: headers,
    };

    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios.request(options);
      return this.success(response);
    } catch (err) {
      return this.error(err as AxiosError);
    }
  }

  private success<T>(response: AxiosResponse<ApiResponse<T>>): ApiResponse<T> {
    console.log("Request Successful:", response.data);
    return response.data;
  }

  private error(error: AxiosError): never {
    console.error("Request Failed:", error.message);
    
    // Convert Axios error to application error
    const errorData = error.response?.data as { message?: string } || {};
    throw new Error(errorData.message || "API request failed");
  }

  // Add convenience methods
  async get<T = any>(url: string, params?: any, token?: string) {
    return this.request<T>("GET", url, undefined, token, { params });
  }

  async post<T = any>(url: string, data?: any, token?: string) {
    return this.request<T>("POST", url, data, token);
  }

  async put<T = any>(url: string, data?: any, token?: string) {
    return this.request<T>("PUT", url, data, token);
  }

  async delete<T = any>(url: string, data?: any, token?: string) {
    return this.request<T>("DELETE", url, data, token);
  }
}

export const client = new APIClient();