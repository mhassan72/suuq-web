<template>
  <section>
    <h1>Login</h1>

    <div class="form_login">
      <div class="field">
        <label for="phone">Lambarkaaga</label><br />
        <input id="phone" type="tel" v-model="userData.phone" />
      </div>

      <div class="field">
        <label for="sir">Lambar Sireeka</label><br />
        <input id="sir" type="password" v-model="userData.secret" />
      </div>

      <div class="action">
        <button @click="submitLogin">Continue</button>
      </div>
    </div>

    auth: {{ auth }}

    <p>Data: {{ userData }}</p>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

// Define the user data reactive reference
const auth = ref({ phone: "", secret: "" })
const userData : any  = ref({});

const submitLogin = async () => {

  const options = {
    method: 'POST',
    url: 'http://18.169.192.75:3000/login',
    headers: {'Content-Type': 'application/json'},
    data: {phone: '2', secret: '3'}
  };

  axios.request(options).then(function (response) {
    userData.value  = response.data
  }).catch(function (error) {
    console.error(error);
  });

};
</script>

<style scoped>
.form_login {
  margin-top: 20px;
}
.field {
  margin-bottom: 15px;
}
.action {
  margin-top: 10px;
}
</style>
