import { reactive, readonly } from 'vue';
import type { ProductsState, Product, FilterOptions } from '@/types';

const initialState: ProductsState = {
  allProducts: [],
  filteredProducts: [],
  rangeValues: [0, 1000],
  filters: {
    condition: '',
    rating: '',
    minPrice: 0,
    maxPrice: 1000,
  }
};

export class ProductState {
  private state = reactive<ProductsState>({ ...initialState });

  get products() {
    return readonly(this.state);
  }

  setProducts(products: Product[]) {
    this.state.allProducts = products;
    this.applyFilters();
  }

  updateFilters(newFilters: Partial<FilterOptions>) {
    this.state.filters = { ...this.state.filters, ...newFilters };
    this.applyFilters();
  }

  updatePriceRange(range: [number, number]) {
    this.state.rangeValues = range;
    this.state.filters.minPrice = range[0];
    this.state.filters.maxPrice = range[1];
    this.applyFilters();
  }

  private applyFilters() {
    this.state.filteredProducts = this.filterProducts();
  }

  private filterProducts() {
    return this.state.allProducts.filter(product => {
      const matchesCondition = !this.state.filters.condition || 
        product.condition === this.state.filters.condition;
      
      const matchesRating = !this.state.filters.rating || 
        product.seller.rating >= parseFloat(this.state.filters.rating);
      
      const matchesPrice = product.price.amount >= this.state.filters.minPrice && 
        product.price.amount <= this.state.filters.maxPrice;

      return matchesCondition && matchesRating && matchesPrice;
    });
  }
}