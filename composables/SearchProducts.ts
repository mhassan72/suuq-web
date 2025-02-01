import { ref, watch} from "vue";
import { client } from '@/services/ApiClient'


export const  searchResult : any = ref<any>([])
export const term = ref<string>("")
export const loading = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null;

export const searchProducts = async () => {
  const response : any = client.get("POST", `search/${term.value}`)
  searchResult.value = await response
}


watch(term, async(newValue, oldValue) => {
    console.log(`Term changed from "${oldValue}" to "${newValue}"`);
  // Only proceed if the newValue length is greater than 1
  if (newValue.length > 1) {
    loading.value = true; // Set loading to true before search

    await searchProducts(); // Trigger search
    loading.value = false; // Reset loading after search
    timeoutId = null; // Reset timeoutId after execution
    
  } else {
    loading.value = false; // Reset loading for invalid terms
  }
});

