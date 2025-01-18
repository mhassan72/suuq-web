<template>
<div>
    <TopNavbar />
    <NabarTopMobile />
    <div class="page_container">
        <!-- Show all  categories here  -->
        <div class="categories"></div>
        <!-- show all products here -->
        <ul class="products">
            <li  class="item" v-for="item in filteredProducts" :key="item.id">
                <!-- {{ item }} -->
                <ProductListItem :data="item" />
            </li>
        </ul>
    </div>
</div>
</template>
<script lang="ts" setup>
import TopNavbar from '../../components/navigation/TopNavbar.vue'
import NabarTopMobile from '../../components/navigation/NabarTopMobile.vue'
import { products, searchProducts } from '../../composables/SearchProducts';
import ProductListItem from '../../components/products/ProductListItem.vue'
import { onMounted } from 'vue'
// import style 
import '../../styles/products.css'

const filteredProducts = products

onMounted(() => {
    searchProducts()
})

</script>