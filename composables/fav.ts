import { ref, computed } from "vue";

type FavoritableItem = { id: string | number } & Record<string, unknown>;

export const favorites = ref<FavoritableItem[]>([]);

// Check if item exists in favorites
export const isInFavorites = computed(() => (id: string | number) => 
  favorites.value.some(item => item.id === id)
);

// Add item to favorites (prevents duplicates)
export function addToFavorites(item: FavoritableItem) {
  if (!isInFavorites.value(item.id)) {
    favorites.value.push(item);
  }
}

// Remove item from favorites
export function removeFromFavorites(id: string | number) {
  favorites.value = favorites.value.filter(item => item.id !== id);
}

// Toggle item in favorites
export function toggleFavorite(item: FavoritableItem) {
  if (isInFavorites.value(item.id)) {
    removeFromFavorites(item.id);
  } else {
    addToFavorites(item);
  }
}

// Clear all favorites
export function clearFavorites() {
  favorites.value = [];
}

// Get total count of favorites
export const favoritesCount = computed(() => favorites.value.length);