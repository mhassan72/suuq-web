import { ProductState } from '@/store/productState';
import { ProductApiService } from '@/services/products';
import type { FilterOptions }  from  '@/types'

export function useProductState() {
  const productState = new ProductState();

  const loadProducts = async () => {
    const products = await ProductApiService.fetchProducts();
    productState.setProducts(products);
  };

  return {
    productState,
    loadProducts
  };
}

export function useProductFilters(productState: ProductState) {
  const updateFilters = (filters: Partial<FilterOptions>) => {
    productState.updateFilters(filters);
  };

  const updatePriceRange = (range: [number, number]) => {
    productState.updatePriceRange(range);
  };

  return {
    updateFilters,
    updatePriceRange
  };
}