import { defineStore } from 'pinia';
import { reactive, computed, ref } from 'vue';
import axios from 'axios';

import type { IUser, IUsers, IApiStatus } from '@/types';

export const useUserStore = defineStore('user', () => {
  const apiStatus = reactive<IApiStatus>({ loading: false, error: false });
  const users = ref<IUsers>([]);
  const filter = ref<string>('');

  const filteredUsers = computed<IUsers>(() => {
    if (!filter.value) {
      return users.value;
    }

    const searchRegex = new RegExp(`.*${filter.value}.*`, 'i');
    return users.value.filter(
      (user) => user.name.match(searchRegex) || user.email.match(searchRegex),
    );
  });

  async function getUsers() {
    try {
      apiStatus.loading = true;
      const res = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users',
      );
      users.value = res.data;
    } catch (err) {
      console.error('API error', err);
      apiStatus.error = true;
    } finally {
      apiStatus.loading = false;
    }
  }

  return { users, filteredUsers, filter, getUsers, apiStatus };
});
