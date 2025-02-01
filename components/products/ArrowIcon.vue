<template>
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
      :transform="direction === 'left' ? 'scale(-1, 1)' : ''"
    >
      <path 
        d="M9 18l6-6-6-6" 
        stroke="currentColor" 
        stroke-width="2" 
        fill="none"
      />
    </svg>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    direction?: 'left' | 'right';
  }>();
  </script>