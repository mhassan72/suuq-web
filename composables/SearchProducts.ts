import { ref, watch} from "vue";
import axios from "axios";


export const  products : any = ref([])
export const term = ref<string>("a")
export const loading = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null;

export const searchProducts = async () => {
    const options = {
        method: 'POST',
        url: `http://18.169.192.75:3000/search/${term.value}`,
        headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        products.value = response.data.filteredProducts
    }).catch(function (error) {
        console.error(error);
    });
}


watch(term, (newValue, oldValue) => {
    console.log(`Term changed from "${oldValue}" to "${newValue}"`);
  // Only proceed if the newValue length is greater than 1
  if (newValue.length > 1) {
    loading.value = true; // Set loading to true before search
    timeoutId = setTimeout(() => {
      searchProducts(); // Trigger search
      loading.value = false; // Reset loading after search
      timeoutId = null; // Reset timeoutId after execution
    }, 3000); // Wait for 3 seconds
  } else {
    loading.value = false; // Reset loading for invalid terms
  }
});

onUnmounted(() => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
})
