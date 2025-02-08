<template>
    <div class="navbar" :class="['fade', !isMobile ? 'show' : 'hidden']">
        <div class="menu_start">
            <div class="logo">
                <LogoComp />
            </div>
            <ul class="links">
                <li class="link_with_dot"><a href="/browse">Browse</a></li>
                <li class="link_with_dot_sell"><a href="/sell">Sell</a></li>
            </ul>
        </div>
        <SearchBar />
        <!-- Desktop Menu -->
        <div class="menu_end_desktop">
            <ul class="links">
                <li  class="notification redDot"  v-if="currentUser?.isSignedIn">
                    <a href="/notifications">
                        <svg  class="customIcon" width="24" height="24"  viewBox="0 0 28 28">
                            <path  fill="currentColor" d="M14.25 26.5c0-0.141-0.109-0.25-0.25-0.25-1.234 0-2.25-1.016-2.25-2.25 0-0.141-0.109-0.25-0.25-0.25s-0.25 0.109-0.25 0.25c0 1.516 1.234 2.75 2.75 2.75 0.141 0 0.25-0.109 0.25-0.25zM27 22c0 1.094-0.906 2-2 2h-7c0 2.203-1.797 4-4 4s-4-1.797-4-4h-7c-1.094 0-2-0.906-2-2 2.312-1.953 5-5.453 5-13 0-3 2.484-6.281 6.625-6.891-0.078-0.187-0.125-0.391-0.125-0.609 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.219-0.047 0.422-0.125 0.609 4.141 0.609 6.625 3.891 6.625 6.891 0 7.547 2.688 11.047 5 13z"></path>
                        </svg>
                    </a>
                </li>

                <li class="basket"  v-if="currentUser?.isSignedIn">
                    <a href="/basket">
                        <svg class="basketSvg" width="24" height="24" viewBox="0 0 32 28">
                            <path fill="currentcolor" d="M30 12c1.109 0 2 0.891 2 2s-0.891 2-2 2h-0.234l-1.797 10.344c-0.172 0.953-1 1.656-1.969 1.656h-20c-0.969 0-1.797-0.703-1.969-1.656l-1.797-10.344h-0.234c-1.109 0-2-0.891-2-2s0.891-2 2-2h28zM7.578 24.5c0.547-0.047 0.969-0.531 0.922-1.078l-0.5-6.5c-0.047-0.547-0.531-0.969-1.078-0.922s-0.969 0.531-0.922 1.078l0.5 6.5c0.047 0.516 0.484 0.922 1 0.922h0.078zM14 23.5v-6.5c0-0.547-0.453-1-1-1s-1 0.453-1 1v6.5c0 0.547 0.453 1 1 1s1-0.453 1-1zM20 23.5v-6.5c0-0.547-0.453-1-1-1s-1 0.453-1 1v6.5c0 0.547 0.453 1 1 1s1-0.453 1-1zM25.5 23.578l0.5-6.5c0.047-0.547-0.375-1.031-0.922-1.078s-1.031 0.375-1.078 0.922l-0.5 6.5c-0.047 0.547 0.375 1.031 0.922 1.078h0.078c0.516 0 0.953-0.406 1-0.922zM7.438 4.562l-1.453 6.438h-2.063l1.578-6.891c0.406-1.828 2.016-3.109 3.891-3.109h2.609c0-0.547 0.453-1 1-1h6c0.547 0 1 0.453 1 1h2.609c1.875 0 3.484 1.281 3.891 3.109l1.578 6.891h-2.063l-1.453-6.438c-0.219-0.922-1.016-1.563-1.953-1.563h-2.609c0 0.547-0.453 1-1 1h-6c-0.547 0-1-0.453-1-1h-2.609c-0.938 0-1.734 0.641-1.953 1.563z"></path>
                        </svg>
                    </a>
                </li>

                <li class="profile" v-if="currentUser?.isSignedIn">
                    <a href="/profile">
                        <svg class="basketSvg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path>

                        </svg>
                    </a>
                </li>

                <li class="signIn" v-if="!currentUser?.isSignedIn">
                    <a href="/auth/login">
                        Sign In 
                        <svg class="basketSvg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path>

                        </svg>
                    </a>
                </li>


            </ul>
        </div>

    </div>
</template>
<script setup lang="ts">
import '../../styles/top_navbar.css';
import '../../styles/normalize.css';
import { ref, watch } from 'vue';
import { useScreenSize } from '../../composables/useScreenSize';
import LogoComp from '../../components/navigation/LogoComp.vue'
import SearchBar from '../../components/navigation/SearchBar.vue'
import { useUser } from '@/composables/useUser';

const { currentUser } = useUser();

const { isMobile } = useScreenSize();
const isVisible = ref(false);

// Watch for screen size changes to toggle visibility
watch(isMobile, (mobile) => {
  isVisible.value = !mobile; // Show on desktop, hide on mobile
});

// Initially set visibility
isVisible.value = !isMobile.value;

</script>