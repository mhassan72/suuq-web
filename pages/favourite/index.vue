<template>
    <div>
        <h1>
            favourite
        </h1>

        <div class="item" v-for="(fav, index) in favorites" :key="index">
            <h1>{{  fav.title }}</h1>
            <p>{{ fav.description }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { favorites } from '@/composables/fav';

</script>