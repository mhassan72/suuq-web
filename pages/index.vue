<template>
    <div>
      <h1>Browse</h1>
      <input type="search" name="search" id="" v-model="search.term">
      <button @click="searchApi()">Search</button>
      {{ search.result.length }}
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios'

const search = ref({
  term: "",
  result: []
})

async function searchApi(){
  const options = {
    method: 'POST',
    url: `http://18.169.192.75:3000/search/${search.value.term}`,
    headers: {'Content-Type': 'application/json'}
  };

  axios.request(options).then(function (response) {
    search.value.result = response.data.filteredProducts
  }).catch(function (error) {
    console.error(error);
  });
}

</script>