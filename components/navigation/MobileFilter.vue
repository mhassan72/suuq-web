<template>
    <div class="product-filter">
      <!-- Filter Options -->
      <label>
        <b>Condition</b>
        <p>Marxalada sheyga aad radineeso</p>
     </label>
      <div class="filters">
        <!-- Filter by Condition -->
        <select v-model="filters.condition" class="filter-select" id="condition">
          <option value="">All Conditions</option>
          <option value="New">New</option>
          <option value="Refurbished">Refurbished</option>
        </select>
  
        <!-- Price Range Slider -->
        <div class="price-range">
          <label>
            🤑 Price Range: {{ validPriceRange.minPrice }} - {{ validPriceRange.maxPrice }}
          </label>
          <div class="slider-container">
            <label for="min">Min</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              v-model="filters.minPrice"
              class="price-slider"
              id="min"
            />
            <label for="max">Max</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              v-model="filters.maxPrice"
              class="price-slider"
            />
          </div>
        </div>
  
        <!-- Filter by Rating -->
         <label for="stars">⭐ Stars</label>
        <select v-model="filters.rating" class="filter-select">
          <option value="">All Ratings</option>
          <option value="5">5 stars</option>
          <option value="4">4+ stars</option>
          <option value="3">3+ stars</option>
          <option value="2">2+ stars</option>
          <option value="1">1+ stars</option>
        </select>
  
        <!-- Action Button -->
        <div class="action">
          <button @click="applyFilters" class="filter-button">Filter</button>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import '@/styles/product_filter.css'
import { filters, validPriceRange } from '@/composables/Products'

// Handle filter application
const applyFilters = () => {
  console.log("Filters Applied:", filters);
  // Add logic here to interact with the state or pass the values to an API
};
</script>
  