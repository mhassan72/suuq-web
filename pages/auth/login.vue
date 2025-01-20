<template>
  <section>
    <h1>Login</h1>

    <div class="form_login">
      <div class="field">
        <label for="phone">Lambarkaaga</label><br />
        <input id="phone" type="tel" v-model="formData.phone" />
      </div>

      <div class="field">
        <label for="sir">Lambar Sireeka</label><br />
        <input id="sir" type="password" v-model="formData.secret" />
      </div>

      <div class="action">
        <button @click="submitLogin">Continue</button>
      </div>
    </div>

    formData: {{ formData }}

    <p>
      currentUser : {{ currentUser }}
    </p>
  </section>
</template>

<script lang="ts" setup>
import { formData, submitLogin, currentUser } from '@/composables/authenticate'
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
