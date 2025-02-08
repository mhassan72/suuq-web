<template>
    <div class="animated-input" :class="{ focused: isFocused || modelValue }">
      <label class="input-label">{{ label }}</label>
      <div class="input-sections" @click="focusInput">
        <div class="section-container">
          <span 
            class="section"
          >252</span>
          <span 
            v-for="(section, index) in formattedSections" 
            :key="index"
            class="section"
            :class="{ active: currentSection === index }"
          >
            <span 
              v-for="(char, charIndex) in section.chars" 
              :key="charIndex"
              class="char"
              :style="{ animationDelay: `${charIndex * 0.1}s` }"
            >
              {{ char }}
            </span>
            <span class="section-divider" v-if="index < 2">-</span>
          </span>
        </div>
        <input
          ref="inputRef"
          v-model="modelValue"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @input="handleInput"
          :maxlength="totalLength"
          class="hidden-input"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: 'Phone Number'
    },
    sectionLengths: {
      type: Array as () => number[],
      default: () => [3, 3, 4]
    }
  });
  
  const modelValue = defineModel<string>({ required: true });
  const isFocused = ref(false);
  const inputRef = ref<HTMLInputElement | null>(null);
  
  const totalLength = computed(() => 
    props.sectionLengths.reduce((acc, curr) => acc + curr, 0)
  );
  
  const currentSection = computed(() => {
    let count = 0;
    for (let i = 0; i < props.sectionLengths.length; i++) {
      count += props.sectionLengths[i];
      if (modelValue.value.length <= count) return i;
    }
    return props.sectionLengths.length - 1;
  });
  
  const formattedSections = computed(() => {
    let remaining = modelValue.value;
    return props.sectionLengths.map((length) => {
      const chars = remaining.slice(0, length).split('');
      remaining = remaining.slice(length);
      return { chars };
    });
  });
  
  const handleInput = () => {
    // Remove non-digits
    modelValue.value = modelValue.value.replace(/\D/g, '');
  };
  
  const focusInput = () => {
    inputRef.value?.focus();
  };
  </script>
  
  <style scoped>
  .animated-input {
    position: relative;
    margin: 2rem 0;
    max-width: 100%;
  }
  
  .input-label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    pointer-events: none;
    transition: all 0.3s ease;
    font-size: 1rem;
  }
  
  .focused .input-label {
    top: -10px;
    font-size: 0.8rem;
    color: #42b883;
  }
  
  .input-sections {
    position: relative;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    cursor: text;
    min-height: 34px;
  }
  
  .section-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  
  .section {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .char {
    opacity: 0;
    animation: typing 0.3s forwards;
  }
  
  @keyframes typing {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .section-divider {
    color: #666;
    margin: 0 0.5rem;
  }
  
  .active::after {
    content: '';
    position: absolute;
    right: -2px;
    height: 1.2em;
    border-right: 2px solid #42b883;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .hidden-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;
    border: 0;
  }
  </style>