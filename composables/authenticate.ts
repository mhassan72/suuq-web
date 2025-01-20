import { ref, watch, onRenderTriggered, } from "vue";
import { client } from '@/services/ApiClient'

// Define the user data reactive reference
export const formData = ref({ phone: "", secret: "" })
export const currentUser  : any = ref<any | null>(null)


export async function submitLogin () {
  const response = await client.get("POST", "login", {phone: formData.value.phone, secret: formData.value.secret})

  if (response.message) {
      currentUser.value = {
        user: response.user,
        token: response.token,
        isSignedIn: true
      }
      storeToken(response.token)
  }
  
}

// Store  the token on local storage
export async function storeToken (token: string) {
  localStorage.setItem('authToken', token);
  console.log("New Token  Stored : ", token)
}

// From local storage restore Token
export async function restoreToken() {
  const token = localStorage.getItem('authToken');
  if(token) {
    console.log("old Token restored : ", token)
    currentUser.value.token = token
  }
}
// trigered on currentUser update 
watch(currentUser, async (user) => {
  alert(`State has changed! ${user.value}`)
  await restoreToken()
});
