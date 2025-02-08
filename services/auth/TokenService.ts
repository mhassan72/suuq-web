// services/TokenService.ts
export class TokenService {
    private static readonly AUTH_TOKEN_KEY = 'authToken';
  
    public static storeToken(token: string): void {
      localStorage.setItem(this.AUTH_TOKEN_KEY, token);
    }
  
    public static getToken(): string | null {
      return localStorage.getItem(this.AUTH_TOKEN_KEY);
    }
  
    public static clearToken(): void {
      localStorage.removeItem(this.AUTH_TOKEN_KEY);
    }
}