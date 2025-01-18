<template>
    <div class="mobileNavbar"  :class="['fade', isMobile ? 'show' : 'hidden']">
        <div class="top">
            <div class="logo">
                <LogoComp />
            </div>
            <MobileMenu />
        </div>
    
        <SearchBar />
    </div>
</template>

<script setup lang="ts">
import '../../styles/mobile_navbar.css';
import '../../styles/normalize.css';
import { ref, watch } from 'vue';
import { useScreenSize } from '../../composables/useScreenSize';
import LogoComp from './LogoComp.vue'
import SearchBar from './SearchBar.vue'
import MobileMenu from './MobileMenu.vue'

const { isMobile } = useScreenSize();
const isVisible = ref(false);

// Watch for screen size changes to toggle visibility
watch(isMobile, (mobile) => {
  isVisible.value = !mobile; // Show on desktop, hide on mobile
});

// Initially set visibility
isVisible.value = !isMobile.value;

</script>