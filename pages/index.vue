<template>
  <div>
      <TopNavbar />
      <NabarTopMobile />
      <MobileTabs />
  
      <div class="page">
          <div class="side_menu" :class="['fade', !isMobile ? 'show' : 'hidden']">
              <div class="menu_container">
                  
              </div>
          </div>
      
          <main>
              <div class="page_container">
                <h1>Hello world</h1>
                {{ products.products }}
              </div>
          </main>
      
  
      </div>
  
      
      
  </div>
  </template>
<script lang="ts" setup>
import TopNavbar from '@/components/navigation/TopNavbar.vue'
import MobileTabs from '@/components/navigation/MobileTabs.vue'
import NabarTopMobile from '@/components/navigation/NabarTopMobile.vue'
import { useScreenSize } from '@/composables/useScreenSize';
import { client } from '@/services/ApiClient'
import { onMounted, ref } from 'vue';
// import style 
import '@/styles/products.css'  


const { isMobile } = useScreenSize();
const products = ref<any>({})

async function getProducts() {
    const response = client.get("GET", "products")
    products.value = await response
}

onMounted(async () => {
    await getProducts()
})
  
</script>