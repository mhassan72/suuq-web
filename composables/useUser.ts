import { ref } from 'vue';
import { User } from '@/models/User.model';
import { TokenService } from '@/services/auth/TokenService';

export const currentUser = ref<User | null>(null);

export function useUser() {
  const initializeUser = () => {
    const token = TokenService.getToken();
    if (token) {
      currentUser.value = new User(null, token, true);
    }
  };

  const setUser = (user: User) => {
    currentUser.value = user;
    TokenService.storeToken(user.token);
  };

  const clearUser = () => {
    currentUser.value = null;
    TokenService.clearToken();
  };

  return {
    currentUser,
    initializeUser,
    setUser,
    clearUser
  };
}