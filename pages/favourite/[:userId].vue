<template>
    <div class="fav_container">
      <div class="header">
        <div>
          <button @click="useBackBtn()">
            <svg id="icon-message" width="26" height="26" viewBox="0 0 20 20">
              <path fill="currentColor"
                d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
              </path>
            </svg>
          </button>
        </div>
        <div class="headertext">
          <h1 class="title">Favourites</h1>
          <pre>{{ favorites.length }} Shey</pre>
          <p>Halkani waxaad ku sugan sheyada aad ❤️ saarte </p>
          {{ currentUser  }}
        </div>
      </div>
  
      <div class="spacer"></div>
  
      <div class="products">
        <ul class="fav_list">
          <li class="favItems" v-for="(item, index) in favorites" :key="index">
            <div class="left">
              <div class="productImage" v-if="item?.media?.images"
                :style="{ 'backgroundImage': `url(${item?.media?.images[0]})` }">
              </div>
            </div>
            <div class="middle">
              <NuxtLink :to="`/product/${item.id}`">
                <h4>{{ item.title }}</h4>
              </NuxtLink>
              <pre>{{ "$" + price_format(item?.price?.amount) }} - {{ item.condition }}</pre>
              <p>{{ truncateString(item?.description, 80) }}</p>
            </div>
            <div class="right">
              <button @click="">
                <svg id="icon-message" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z">
                  </path>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import '@/styles/favroties.css';
  import '@/styles/normalize.css';
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { truncateString } from '@/composables/Helpers';
  
  const router = useRouter();
  const route = useRoute();
  const favorites = ref<any[]>([]);

  // Fetch favourites when the component is mounted
  onMounted(async () => {
    try {
      // const response = await favouriteService.getFavouritesByUser(route.params?.userId, token);
      // favorites.value = response.data || [];
    } catch (error) {
      console.error("Failed to fetch favourites:", error);
    }
  });
  
  // Navigate back
  function useBackBtn() {
    router.go(-1);
  }
  
  // Format price
  function price_format(amount: number): string {
    return isNaN(amount) ? '0.00' : amount.toFixed(2);
  }
  </script>
  