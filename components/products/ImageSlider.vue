<template>
    <div class="product-slider">
        <div class="slider-container" 
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd">
          <div class="slider-track" :style="trackStyle">
            <div 
              v-for="(img, index) in images" 
              :key="index"
              class="slide-container"
            >
              <img
                :src="img"
                :alt="`Product Image ${index + 1}`"
                class="product-image"
                draggable="false"
                @dragstart.prevent
                @contextmenu.prevent
              />
            </div>
          </div>
    
          <!-- Navigation Arrows -->
          <button v-if="showArrows && images.length > 1" 
                  class="nav-arrow prev" 
                  @click="previousSlide"
                  aria-label="Previous image">
            <ArrowIcon direction="left" />
          </button>
          <button v-if="showArrows && images.length > 1" 
                  class="nav-arrow next" 
                  @click="nextSlide"
                  aria-label="Next image">
            <ArrowIcon direction="right" />
          </button>
    
          <!-- Dots Indicator -->
          <div v-if="showDots && images.length > 1" class="dots-container">
            <button v-for="n in images.length" 
                    :key="n"
                    class="dot" 
                    :class="{ active: currentSlide === n - 1 }"
                    @click="goToSlide(n - 1)"
                    :aria-label="`Go to slide ${n}`">
            </button>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import ArrowIcon from './ArrowIcon.vue';

interface Props {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  aspectRatio?: string;
}

const props = withDefaults(defineProps<Props>(), {
  autoPlay: false,
  interval: 5000,
  showArrows: true,
  showDots: true,
  aspectRatio: '1/1',
});

const emit = defineEmits(['slide-change']);

const currentSlide = ref(0);
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50;
let autoPlayInterval = ref<number | null>(null);

const trackStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: 'transform 0.3s ease-in-out'
}));

const getSlideStyle = (img: string) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: 'contain', // Changed to 'contain' to show full image
    backgroundPosition: 'center',
    backgroundColor: props.background,
    aspectRatio: props.aspectRatio
});

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % props.images.length;
    emit('slide-change', currentSlide.value);
};

const previousSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + props.images.length) % props.images.length;
    emit('slide-change', currentSlide.value);
};

const goToSlide = (index: number) => {
    if (index >= 0 && index < props.images.length) {
        currentSlide.value = index;
        emit('slide-change', currentSlide.value);
    }
};

// Touch handling
const handleTouchStart = (e: TouchEvent) => {
    touchStartX.value = e.touches[0].clientX;
    touchEndX.value = 0;
};

const handleTouchMove = (e: TouchEvent) => {
    touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
    if (!touchStartX.value || !touchEndX.value) return;

    const distance = touchStartX.value - touchEndX.value;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) previousSlide();

    touchStartX.value = 0;
    touchEndX.value = 0;
};

// Autoplay functionality
const startAutoPlay = () => {
    if (props.autoPlay && props.images.length > 1) {
        autoPlayInterval.value = window.setInterval(nextSlide, props.interval);
    }
};

const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
        autoPlayInterval.value = null;
    }
};

watch(() => props.autoPlay, (autoPlay) => {
    if (autoPlay) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
});

watch(() => props.images, () => {
    currentSlide.value = 0;
    if (props.autoPlay) {
        stopAutoPlay();
        startAutoPlay();
    }
});

onUnmounted(() => {
    stopAutoPlay();
});
</script>

<style scoped>
.product-slider {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.slider-container {
  position: relative;
  width: 100%;
}

.slider-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slide-container {
  flex: 0 0 100%;
  position: relative;
  aspect-ratio: v-bind('props.aspectRatio');
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.dots-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: rgba(0, 0, 0, 0.8);
  width: 12px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .product-slider {
    border-radius: 0;
  }
  
  .nav-arrow {
    width: 32px;
    height: 32px;
    padding: 8px;
  }
}
</style>