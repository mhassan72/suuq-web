import { ref, onMounted, onUnmounted } from 'vue';

export function useScreenSize() {
  const isMobile = ref(false);

  const updateScreenSize = () => {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  };

  onMounted(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
  });

  return { isMobile };
}


