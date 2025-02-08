<template>
    <div>
        <TopNavbar />
        <NabarTopMobile />
        <MobileTabs />
        <MobileFilter v-if="isMobile" /> 

        <div class="page_container">
            <div class="sidebar" v-if="!isMobile">
                <MobileFilter /> 
            </div>
            <main>
                <!-- <h1>Search Term : {{ route.query.term }}</h1> -->
                <div class="products">

                    [ {{ filteredProducts.length }} Shey]

                    <ul class="products_list"  v-if="filteredProducts.length < 1">
                        <div class="noList">
                            <h1>Sorry We couldnt find any products</h1>
                        </div>

                        <li class="item" v-for="(item, index) in products.products" :key="index">
                            <ProductListItem :data="item" />
                        </li>

                    </ul>

                    <ul class="products_list" v-else>
                        
                        <li class="item" v-for="(item, index) in filteredProducts" :key="index">
                            <ProductListItem :data="item" />
                        </li>
                    </ul>

                </div>
            </main>
        </div>
        <Spacer />
        
    </div>
    
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TopNavbar from '@/components/navigation/TopNavbar.vue'
import ProductListItem from '@/components/products/ProductListItem.vue'
import MobileTabs from '@/components/navigation/MobileTabs.vue'
import NabarTopMobile from '@/components/navigation/NabarTopMobile.vue'
import MobileFilter from '@/components/navigation/MobileFilter.vue'
import { useScreenSize } from '@/composables/useScreenSize';
import { products, filteredProducts, products_list } from '@/composables/Products'
import  Spacer  from '@/components/products/Spacer.vue'

// import '@/styles/bootstrap.css'   
import '@/styles/search.css'
import '@/styles/products.css'

const route = useRoute()
const { isMobile } = useScreenSize();

onMounted(async () => {
    console.log(route.query)
    await products_list()
})

</script>