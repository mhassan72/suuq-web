// composables/useAuth.ts
import { AuthService } from '@/services/auth';
import { useUser } from '@/composables/useUser';

export function useAuth() {
  const { setUser } = useUser();

  const handleLogin = async (phone: string, secret: string) => {
    try {
      const user = await AuthService.login(phone, secret);
      setUser(user);
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  return {
    handleLogin
  };
}