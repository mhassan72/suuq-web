<template>
    <div class="slider-container">
      <div class="slider-track">
        <div class="slider-filled" :style="filledStyle"></div>
      </div>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="leftValue"
        :style="leftThumbStyle"
        class="slider-input left-input"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="rightValue"
        :style="rightThumbStyle"
        class="slider-input right-input"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  
  const props = withDefaults(
    defineProps<{
      modelValue: [number, number];
      min?: number;
      max?: number;
      step?: number;
    }>(),
    {
      min: 0,
      max: 1000,
      step: 1,
    }
  );
  
  const emit = defineEmits<{
    'update:modelValue': [value: [number, number]];
  }>();
  
  const leftValue = ref(props.modelValue[0]);
  const rightValue = ref(props.modelValue[1]);
  
  // Ensure values stay within bounds and ordered correctly
  const clampValues = () => {
    let [newLeft, newRight] = [leftValue.value, rightValue.value];
    
    // Swap if values are crossed
    if (newLeft > newRight) {
      [newLeft, newRight] = [newRight, newLeft];
    }
    
    // Clamp to min/max
    newLeft = Math.max(props.min, Math.min(newLeft, props.max));
    newRight = Math.max(props.min, Math.min(newRight, props.max));
    
    leftValue.value = newLeft;
    rightValue.value = newRight;
  };
  
  // Update parent when values change
  watch([leftValue, rightValue], () => {
    clampValues();
    emit('update:modelValue', [leftValue.value, rightValue.value]);
  });
  
  // Handle external modelValue changes
  watch(
    () => props.modelValue,
    ([newLeft, newRight]) => {
      leftValue.value = newLeft;
      rightValue.value = newRight;
      clampValues();
    },
    { deep: true }
  );
  
  // Calculate filled area style
  const filledStyle = computed(() => {
    const leftPos = ((leftValue.value - props.min) / (props.max - props.min)) * 100;
    const rightPos = ((rightValue.value - props.min) / (props.max - props.min)) * 100;
    return {
      left: `${leftPos}%`,
      width: `${rightPos - leftPos}%`,
    };
  });
  
  // Calculate thumb positions to prevent overlap
  const leftThumbStyle = computed(() => ({
    zIndex: leftValue.value > props.min + (props.max - props.min) * 0.9 ? '2' : '1',
  }));
  
  const rightThumbStyle = computed(() => ({
    zIndex: rightValue.value < props.min + (props.max - props.min) * 0.1 ? '2' : '1',
  }));
  </script>
  
  <style scoped>
  .slider-container {
    position: relative;
    height: 40px;
    width: 100%;
    padding: 0 8px;
  }
  
  .slider-track {
    position: absolute;
    top: 50%;
    left: 8px;
    right: 8px;
    height: 4px;
    background: #e9e9e9;
    border-radius: 2px;
    transform: translateY(-50%);
  }
  
  .slider-filled {
    position: absolute;
    height: 100%;
    background: #3dc1d3;
    border-radius: 2px;
  }
  
  .slider-input {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    margin: 0;
    pointer-events: none;
    transform: translateY(-50%);
    -webkit-appearance: none;
  }
  
  .slider-input::-webkit-slider-thumb {
    pointer-events: all;
    width: 20px;
    height: 20px;
    border: 2px solid #3dc1d3;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
  }
  
  .slider-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 2px solid #3dc1d3;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
  
  .left-input::-webkit-slider-thumb {
    margin-left: -8px;
  }
  
  .right-input::-webkit-slider-thumb {
    margin-right: -8px;
  }
  </style>