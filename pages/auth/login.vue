<template>
  <section class="login-section">
    <h1 class="login-title">Login</h1>

    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">

        <PhoneInput v-model="formData.phone" :is-submitting="isSubmitting" label="Phone Number" />
        <!-- size: {{ formData.phone.length }} -->
        <small id="phone-help" class="help-text">Fadlan geli lambarkaaga</small>
      </div>

      <div class="form-group">
        <label for="sir" class="input-label">Lambar Sireeka</label>
        <input
          id="sir"
          v-model="formData.secret"
          type="password"
          class="form-input"
          :disabled="isSubmitting"
          autocomplete="current-password"
          required
        />
      </div>

      <div class="form-actions">
        <button
          type="submit"
          class="submit-button"
          :disabled="isSubmitting"
          :aria-busy="isSubmitting"
        >
          <span v-if="!isSubmitting">Continue</span>
          <span v-else>Processing...</span>
        </button>
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </form>

    <div v-if="showDebugInfo" class="debug-info">
      <h3>Debug Information</h3>
      <pre>formData: {{ formData }}</pre>
      <pre>currentUser: {{ currentUser }}</pre>
      <pre>{{ currentUser?.isSignedIn }}</pre>
    </div>
  </section>
</template>

<script lang="ts" setup>
import '@/styles/login.css'
import { watchEffect } from 'vue';
import { useLoginForm } from '@/composables/useLoginForm';
import { useUser } from '@/composables/useUser';
import PhoneInput from '@/components/inputs/PhoneInput.vue'
import { useRouter } from 'vue-router';

const { formData, submitLogin, isSubmitting, errorMessage } = useLoginForm();
const { currentUser } = useUser();

const showDebugInfo = import.meta.env.DEV;
const router = useRouter()

const handleSubmit = async () => {
  await submitLogin();
};

// Automatic cleanup on unmount
watchEffect(() => {
  if (currentUser.value?.isSignedIn) {
    // Handle successful login redirection or state update
    router.push('/')
  }
});
</script>