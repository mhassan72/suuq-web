import { client } from '@/services/ApiClient';
import { User } from '@/models/User.model';

export class AuthService {
  public static async login(phone: string, secret: string): Promise<User> {
    try {
      const response : any = await client.post<{
        user: any;
        token: string;
        message: string;
      }>("login", { phone, secret });

      if (!response.message) {
        throw new Error('Login failed: No success message');
      }

      return new User(
        response.user,
        response.token,
        true
      );
    } catch (error) {
      throw new Error(`Authentication failed: ${(error as Error).message}`);
    }
  }
}