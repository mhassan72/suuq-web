import { ref, watch, computed } from "vue";
import { client } from '@/services/ApiClient';
import type { FilterOptions } from '@/types';

// Initialize products as an empty array
export const products = ref({
    products: []
});

export const rangeValues = ref<[number, number]>([0, 1000]);
export const filteredProducts : any = ref<any[]>([]);

// Initialize filters state
export const filters = ref<FilterOptions>({
  condition: "",
  rating: "",
  minPrice: rangeValues.value[0],
  maxPrice: rangeValues.value[1],
});

// Valid price range as a computed property
export const validPriceRange = computed(() => ({
  minPrice: rangeValues.value[0],
  maxPrice: rangeValues.value[1],
}));

// Function to filter products based on the selected filters
function filterProducts() {
  if (!Array.isArray(products.value.products)) {
    console.error('Error: products.value is not an array.');
    return [];
  }

  // Apply filters and assign the result to `filteredProducts`
  return products.value.products.filter((product: any) => {
    // Filter by condition
    if (filters.value.condition && product.condition !== filters.value.condition) {
      return false;
    }

    // Filter by rating
    if (filters.value.rating && product.seller?.rating < parseFloat(filters.value.rating)) {
      return false;
    }

    // Filter by price range
    const productPrice = product.price?.amount || 0;
    if (productPrice < rangeValues.value[0] || productPrice > rangeValues.value[1]) {
      return false;
    }

    return true;
  });
}

// Fetch products and store in products.value
export async function products_list() {
  const response: any = await client.get("products");
  products.value = response;
}

// Watcher for syncing minPrice and maxPrice, and applying filters
watch(
  () => [rangeValues.value[0], rangeValues.value[1], filters.value.condition, filters.value.rating],
  () => {
    // Sync minPrice and maxPrice if needed
    if (filters.value.minPrice > filters.value.maxPrice) {
      const temp = filters.value.minPrice;
      filters.value.minPrice = filters.value.maxPrice;
      filters.value.maxPrice = temp; // Adjust dynamically
    }

    // Apply filters whenever any filter is changed
    filteredProducts.value = filterProducts();
  },
  { immediate: true, deep: true }
);
