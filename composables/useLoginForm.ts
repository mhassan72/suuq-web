import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';

export function useLoginForm() {
    const formData = ref({ phone: '', secret: '' });
    const isSubmitting = ref(false);
    const errorMessage = ref<string | null>(null);
    const { handleLogin } = useAuth();
  
    const submitLogin = async () => {
      try {
        isSubmitting.value = true;
        errorMessage.value = null;
        return await handleLogin(
          formData.value.phone,
          formData.value.secret
        );
      } catch (error) {
        errorMessage.value = (error as Error).message || 'Login failed';
        throw error;
      } finally {
        isSubmitting.value = false;
      }
    };
  
    return {
      formData,
      submitLogin,
      isSubmitting,
      errorMessage
    };
  }