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
                <!-- Show all  categories here  -->
                <div class="categories"></div>
                <!-- show all products here -->
                <ul class="products">
                    <li  class="item" v-for="item in products.products" :key="item.id">
                        <!-- {{ item }} -->
                        <ProductListItem :data="item" />
                    </li>
                </ul>
            </div>
        </main>
    

    </div>

    
    
</div>
</template>
<script lang="ts" setup>
import TopNavbar from '@/components/navigation/TopNavbar.vue'
import MobileTabs from '@/components/navigation/MobileTabs.vue'
import NabarTopMobile from '@/components/navigation/NabarTopMobile.vue'
import ProductListItem from '@/components/products/ProductListItem.vue'
import { onMounted } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize';
import { client } from '@/services/ApiClient'
// import style 
import '@/styles/products.css'


const products = ref<any>({})

async function getProducts() {
    const response = client.get("products")
    products.value = await response
}


const { isMobile } = useScreenSize();
const isVisible = ref(false);

// Watch for screen size changes to toggle visibility
watch(isMobile, (mobile) => {
  isVisible.value = !mobile; // Show on desktop, hide on mobile
});

// Initially set visibility
isVisible.value = !isMobile.value;

onMounted(async () => {
    await getProducts()
})

</script>