<template>
    <div>
        <h1>Profile</h1>
        {{ currentUser }}
    </div>
</template>
<script lang="ts" setup>
import { useUser } from '@/composables/useUser';

const { currentUser } = useUser();

</script>