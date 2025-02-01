<template>
  <div v-if="isMobile">

    <div class="product-filter" v-if="filterSate.show">
      <!-- Filter Options -->
      <label>
        <b>Condition</b>
        <p>Marxalada sheyga aad radineeso</p>
     </label>
      <div class="filters">
        <!-- Filter by Condition -->
        <select v-model="filters.condition" class="filter-select" id="condition">
          <option value="">Kuli</option>
          <option value="New">Cuseeb</option>
          <option value="Refurbished">Celis</option>
          <option value="used">Duq</option>
        </select>
  
        <!-- Price Range Slider -->
         <br>
        <div class="price-range">
          <label>
            🤑 Qiimaha Beeca
            <!-- : {{ validPriceRange.minPrice }} - {{ validPriceRange.maxPrice }} -->
          </label>
          <DualRangeSlider v-model="rangeValues" :min="0" :max="1000" :step="1" />
          <div class="tags">
            <div class="min">
              Ugu Yaraan <b>{{ validPriceRange.minPrice }}</b>
            </div>

            <div class="max">
              Ugu Badnaan <b>{{ validPriceRange.maxPrice }}</b>
            </div>
          </div>
        </div>
        <br>

  
        <!-- Filter by Rating -->
         <label for="stars">⭐ Tayada</label>
        <select v-model="filters.rating" class="filter-select">
          <option value="">Kuli</option>
          <option value="5">5 stars</option>
          <option value="4">4+ stars</option>
          <option value="3">3+ stars</option>
          <option value="2">2+ stars</option>
          <option value="1">1+ stars</option>
        </select>
      </div>
    </div>

    <div class="action">
      <button @click="applyFilters" class="filter-button">
        <span v-if="filterSate.show"> Continue </span>
        <span v-else> Filter </span>
      </button>
    </div>

  </div>

  <div v-else>
      <div class="product-filter" >
        <!-- Filter Options -->
        <label>
          <b>Condition</b>
          <p>Marxalada sheyga aad radineeso</p>
       </label>
        <div class="filters">
          <!-- Filter by Condition -->
          <select v-model="filters.condition" class="filter-select" id="condition">
            <option value="">Kuli</option>
            <option value="New">Cuseeb</option>
            <option value="Refurbished">Celis</option>
            <option value="used">Duq</option>
          </select>
    
          <!-- Price Range Slider -->
           <br>
          <div class="price-range">
            <label>
              🤑 Qiimaha Beeca
              <!-- : {{ validPriceRange.minPrice }} - {{ validPriceRange.maxPrice }} -->
            </label>
            <DualRangeSlider v-model="rangeValues" :min="0" :max="1000" :step="1" />
            <div class="tags">
              <div class="min">
                Ugu Yaraan <b>{{ validPriceRange.minPrice }}</b>
              </div>
  
              <div class="max">
                Ugu Badnaan <b>{{ validPriceRange.maxPrice }}</b>
              </div>
            </div>
          </div>
          <br>
  
    
          <!-- Filter by Rating -->
           <label for="stars">⭐ Tayada</label>
          <select v-model="filters.rating" class="filter-select">
            <option value="">Kuli</option>
            <option value="5">5 stars</option>
            <option value="4">4+ stars</option>
            <option value="3">3+ stars</option>
            <option value="2">2+ stars</option>
            <option value="1">1+ stars</option>
          </select>
        </div>
      </div>
  </div>
    
</template>
<script lang="ts" setup>
import '@/styles/product_filter.css'
import { filters, validPriceRange, rangeValues } from '@/composables/Products'
import DualRangeSlider from '@/components/navigation/DualRangeSlider.vue';
import { useScreenSize } from '@/composables/useScreenSize'

const filterSate = ref({ show: false })

const { isMobile  } = useScreenSize()

// Handle filter application
const applyFilters = () => {
  console.log("Filters Applied:", filters);
  // Add logic here to interact with the state or pass the values to an API
  filterSate.value.show = !filterSate.value.show
};
</script>
  