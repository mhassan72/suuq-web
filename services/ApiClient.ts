import axios,{ type AxiosRequestConfig, type AxiosResponse, AxiosError } from "axios";
import { baseURL } from "@/config/environment";

export default class APIClient {
  public BaseUrl = baseURL

  constructor() {
    this.BaseUrl = baseURL;
  }

  async get(
    method: string = "GET",
    url: string,
    data?: any,
    token?: string,
    headers: Record<string, string> = { "Content-Type": "application/json" }
  ): Promise<any> {
    // Merge headers with token if provided
    if (token) {
      headers["Authorization"] = `${token}`;
    }

    // Build the Axios request config
    const options: AxiosRequestConfig = {
      method: method,
      url: `${this.BaseUrl}${url}`,
      data: data,
      headers: headers,
    };

    try {
      const response: AxiosResponse = await axios.request(options);
      return this.success(response);
    } catch (err) {
      return this.error(err as AxiosError);
    }
  }

  private success(response: AxiosResponse): any {
    console.log("Request Successful:", response.data);
    return response.data;
  }

  private error(error: AxiosError): any {
    console.error("Request Failed:", error.message);

    if (error.response) {
      // Server responded with a status outside the 2xx range
      console.error("Response Data:", error.response.data);
      console.error("Response Status:", error.response.status);
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No Response Received:", error.request);
    }

    throw error; // Re-throw the error for the caller to handle
  }
}


export const client = new APIClient()