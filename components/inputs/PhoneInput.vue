<template>
    <div class="phone-input">
      <label v-if="label" :for="inputId" class="phone-input__label">
        {{ label }}
      </label>
      
      <div class="phone-input__wrapper">
        <span class="phone-input__country-code">(252)</span>
        <input
          :id="inputId"
          ref="inputRef"
          type="tel"
          maxlength="16"
          class="phone-input__field"
          :value="formattedValue"
          @input="handleInput"
          @blur="handleBlur"
          :disabled="isSubmitting"
          :aria-describedby="helpTextId"
          :aria-invalid="hasError"
          aria-label="Phone number input"
          autocomplete="tel-national"
        />
      </div>
  
      <div v-if="helpText || errorMessage" class="phone-input__messages">
        <small v-if="helpText" :id="helpTextId" class="phone-input__help">
          {{ helpText }}
        </small>
        <small v-if="errorMessage" class="phone-input__error">
          {{ errorMessage }}
        </small>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref, watchEffect, onMounted } from 'vue';
  import { usePhoneFormatter } from '@/composables/usePhoneFormatter';
  import { generateUniqueId } from '@/utils/idGenerator';
  
  interface Props {
    modelValue: string;
    label?: string;
    helpText?: string;
    isSubmitting?: boolean;
    errorMessage?: string;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    isSubmitting: false,
  });
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'blur'): void;
  }>();
  
  // Unique IDs for accessibility
  const inputId = generateUniqueId('phone-input');
  const helpTextId = generateUniqueId('phone-help');
  
  const inputRef = ref<HTMLInputElement | null>(null);
  const { formatPhoneNumber } = usePhoneFormatter();
  
  const formattedValue = computed(() => 
    formatPhoneNumber(props.modelValue)
  );
  
  const hasError = computed(() => !!props.errorMessage);
  
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const rawValue = target.value.replace(/\D/g, '').slice(0, 10);
    emit('update:modelValue', rawValue);
  };
  
  const handleBlur = () => {
    emit('blur');
  };
  
  // Auto-focus logic
  watchEffect(() => {
    if (!props.isSubmitting && inputRef.value) {
      inputRef.value.focus();
    }
  });
  
  // Expose focus method for parent components
  defineExpose({
    focus: () => inputRef.value?.focus()
  });
  </script>
  
  <style scoped>
  .phone-input {
    --border-color: #c8d6e5;
    --focus-color: #5f27cd;
    --error-color: #ff6b6b;
    --text-color: #212529;
    --disabled-bg: #e9ecef;
  
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  
  .phone-input__label {
    font: 500 1rem/1.2 system-ui;
    color: var(--text-color);
  }
  
  .phone-input__wrapper {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    background-color: white;
    transition: 
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  
  .phone-input__wrapper:focus-within {
    border-color: var(--focus-color);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .phone-input__wrapper[aria-invalid="true"] {
    border-color: var(--error-color);
  }
  
  .phone-input__country-code {
    font: 1rem/1.5 system-ui;
    color: var(--text-color);
    margin-right: 0.5rem;
  }
  
  .phone-input__field {
    flex: 1;
    border: 0;
    padding: 0;
    font: 1rem/1.5 system-ui;
    color: var(--text-color);
    background: transparent;
    min-width: 0; /* Fix flex input shrinking */
  }

  .phone-input__field:focus {
    outline: none;
  }
  
  .phone-input__field:disabled {
    background-color: var(--disabled-bg);
    cursor: not-allowed;
  }
  
  .phone-input__messages {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .phone-input__help {
    color: #6c757d;
    font: 0.875rem/1.4 system-ui;
  }
  
  .phone-input__error {
    color: var(--error-color);
    font: 0.875rem/1.4 system-ui;
    font-weight: 500;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .phone-input__wrapper {
      transition: none;
    }
  }
  </style>