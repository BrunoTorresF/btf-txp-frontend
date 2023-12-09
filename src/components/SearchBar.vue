<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users';

const usersStore = useUserStore();
const { filter } = storeToRefs(usersStore);
</script>

<template>
  <form @submit.prevent="">
    <v-text-field
      v-model="filter"
      label="Search"
      name="search"
      type="text"
      max-width="21.24rem"
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
      class="mx-auto search-input"
      rounded="pill"
      clearable />
  </form>
</template>

<style scoped lang="scss">
.search-input {
  max-width: 21.25rem;
}
</style>
