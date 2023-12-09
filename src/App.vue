<script setup lang="ts">
import UserList from '@/components/UserList.vue';
import SearchBar from './components/SearchBar.vue';

import tranxportaLogo from '@/assets/traxporta-logo.png';
</script>

<template>
  <v-app>
    <hr class="top-divider" />
    <v-navigation-drawer rail rail-width="92" color="white">
      <v-list-item
        nav
        width="52"
        height="52"
        class="my-9 mx-auto rounded-lg elevation-3">
        <v-img :src="tranxportaLogo" />
      </v-list-item>
    </v-navigation-drawer>
    <v-main class="d-flex justify-center main-content">
      <v-sheet
        :elevation="8"
        rounded="xl"
        class="d-flex flex-column justify-center my-auto"
        height="45rem"
        width="38.75rem">
        <div class="text-h6 font-weight-bold text-center">Users</div>
        <SearchBar />
        <UserList />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.main-content {
  background-color: #f9f9f9;
  border: 1px solid red;
}

.top-divider {
  border: none;
  z-index: 9999;
  height: 6px;
  position: relative;

  &::before {
    opacity: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, $txp-blue, $txp-yellow);
  }
}
</style>
