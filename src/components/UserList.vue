<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users';

const usersStore = useUserStore();
const { getUsers } = usersStore;
const { filteredUsers, apiStatus } = storeToRefs(usersStore);

getUsers();
</script>

<template>
  <v-skeleton-loader
    v-if="apiStatus.loading"
    :type="`
      heading,${'list-item-avatar,divider,'.repeat(8)}`"></v-skeleton-loader>
  <v-table v-else id="user-table" class="h-100">
    <thead>
      <tr>
        <th />
        <th class="text-left text-grey">Name</th>
        <th class="text-left text-grey">E-mail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in filteredUsers" :key="user.name">
        <td class="text-right" width="15%">
          <v-avatar
            :image="`https://i.pravatar.cc/250?u=${user.email}`"
            size="40"
            variant="elevated"
            rounded="0"
            class="rounded-lg"
            :alt="`${user.name} avatar`" />
        </td>
        <td class="text-left font-weight-bold" width="40%">
          {{ user.name }}
        </td>
        <td class="text-left text-lowercase font-weight-bold" width="45%">
          {{ user.email }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped lang="scss"></style>
