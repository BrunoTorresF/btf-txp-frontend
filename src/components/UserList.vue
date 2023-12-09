<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/users';

const usersStore = useUserStore();
const { getUsers } = usersStore;
const { filteredUsers } = storeToRefs(usersStore);

getUsers();

console.log('app users', filteredUsers.value);
</script>

<template>
  <v-table id="user-table" class="h-100">
    <thead>
      <tr>
        <th />
        <th class="text-left">Name</th>
        <th class="text-left">E-mail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in filteredUsers" :key="user.name">
        <td class="text-right">
          <v-avatar
            :image="`https://i.pravatar.cc/250?u=${user.email}`"
            size="40"
            variant="elevated"
            rounded="0"
            class="rounded-lg"
            :alt="`${user.name} avatar`" />
        </td>
        <td class="text-left font-weight-bold w-40">
          {{ user.name }}
        </td>
        <td class="text-left text-lowercase font-weight-bold w-40">
          {{ user.email }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped lang="scss">
#user-table {
  table-layout: fixed;
  width: 100%;
}
</style>
