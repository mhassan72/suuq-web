<template>
    <ul class="tabs" :class="['fade', isMobile ? 'show' : 'hidden']">
        <div class="container">

            <li class="tab" @click="link('/browse')">
                <svg id="icon-home" width="28" height="28" viewBox="0 0 24 24">
                    <path d="M2.386 8.211c-0.236 0.184-0.386 0.469-0.386 0.789v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c-0.001-0.3-0.134-0.593-0.386-0.789l-9-7c-0.358-0.275-0.861-0.285-1.228 0zM16 21v-9c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v9h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10.511l8-6.222 8 6.222v10.511c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM10 21v-8h4v8z"></path>
                </svg>
            </li>
            <li class="tab" @click="link(`/favourite/${currentUser?.user.phone}`)">
                {{ currentUser?.user.phone }}
                <svg id="icon-heart" width="28" height="28" viewBox="0 0 32 32">
                    <path d="M29.193 5.265c-3.629-3.596-9.432-3.671-13.191-0.288-3.76-3.383-9.561-3.308-13.192 0.288-3.741 3.704-3.741 9.709 0 13.415 1.069 1.059 11.053 10.941 11.053 10.941 1.183 1.172 3.096 1.172 4.278 0 0 0 10.932-10.822 11.053-10.941 3.742-3.706 3.742-9.711-0.001-13.415zM27.768 17.268l-11.053 10.941c-0.393 0.391-1.034 0.391-1.425 0l-11.053-10.941c-2.95-2.92-2.95-7.671 0-10.591 2.844-2.815 7.416-2.914 10.409-0.222l1.356 1.22 1.355-1.22c2.994-2.692 7.566-2.594 10.41 0.222 2.95 2.919 2.95 7.67 0.001 10.591zM9.253 7.501c0.277 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.001c-1.794 0-3.249 1.455-3.249 3.249v0.001c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0c0-2.346 1.901-4.247 4.246-4.249 0.002 0 0.002-0.001 0.004-0.001z"></path>
                </svg>
            </li>
            <li class="tab" @click="link('/basket')">
                <svg id="icon-shopping-basket" width="28" height="28" viewBox="0 0 32 28">
                    <path d="M30 12c1.109 0 2 0.891 2 2s-0.891 2-2 2h-0.234l-1.797 10.344c-0.172 0.953-1 1.656-1.969 1.656h-20c-0.969 0-1.797-0.703-1.969-1.656l-1.797-10.344h-0.234c-1.109 0-2-0.891-2-2s0.891-2 2-2h28zM7.578 24.5c0.547-0.047 0.969-0.531 0.922-1.078l-0.5-6.5c-0.047-0.547-0.531-0.969-1.078-0.922s-0.969 0.531-0.922 1.078l0.5 6.5c0.047 0.516 0.484 0.922 1 0.922h0.078zM14 23.5v-6.5c0-0.547-0.453-1-1-1s-1 0.453-1 1v6.5c0 0.547 0.453 1 1 1s1-0.453 1-1zM20 23.5v-6.5c0-0.547-0.453-1-1-1s-1 0.453-1 1v6.5c0 0.547 0.453 1 1 1s1-0.453 1-1zM25.5 23.578l0.5-6.5c0.047-0.547-0.375-1.031-0.922-1.078s-1.031 0.375-1.078 0.922l-0.5 6.5c-0.047 0.547 0.375 1.031 0.922 1.078h0.078c0.516 0 0.953-0.406 1-0.922zM7.438 4.562l-1.453 6.438h-2.063l1.578-6.891c0.406-1.828 2.016-3.109 3.891-3.109h2.609c0-0.547 0.453-1 1-1h6c0.547 0 1 0.453 1 1h2.609c1.875 0 3.484 1.281 3.891 3.109l1.578 6.891h-2.063l-1.453-6.438c-0.219-0.922-1.016-1.563-1.953-1.563h-2.609c0 0.547-0.453 1-1 1h-6c-0.547 0-1-0.453-1-1h-2.609c-0.938 0-1.734 0.641-1.953 1.563z"></path>
                </svg>
            </li>
            <li class="tab" @click="link('/profile')">
                <svg id="icon-user-circle" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M23.797 20.922c-0.406-2.922-1.594-5.516-4.25-5.875-1.375 1.5-3.359 2.453-5.547 2.453s-4.172-0.953-5.547-2.453c-2.656 0.359-3.844 2.953-4.25 5.875 2.172 3.063 5.75 5.078 9.797 5.078s7.625-2.016 9.797-5.078zM20 10c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6zM28 14c0 7.703-6.25 14-14 14-7.734 0-14-6.281-14-14 0-7.734 6.266-14 14-14s14 6.266 14 14z"></path>
                </svg>
            </li>
        </div>
        
    </ul>
</template>
<script lang="ts" setup>
import '../../styles/mobile_tabs.css'
import { ref, watch } from 'vue';
import { useScreenSize } from '../../composables/useScreenSize';
import { useRouter } from 'vue-router';
import { useUser } from '@/composables/useUser';

const { isMobile } = useScreenSize();
const isVisible = ref(false);
const router = useRouter()

const { currentUser }  = useUser()

function link(path: string) {
    router.push({ path: path })
}
// Watch for screen size changes to toggle visibility
watch(isMobile, (mobile) => {
  isVisible.value = !mobile; // Show on desktop, hide on mobile
});

// Initially set visibility
isVisible.value = !isMobile.value;
</script>