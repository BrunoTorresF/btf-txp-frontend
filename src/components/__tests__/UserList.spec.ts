import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createVuetify } from 'vuetify';

import UserList from '../UserList.vue';
import { usersFake } from './users.fake';

export const vuetify = createVuetify();

const initUserStore = { initialState: { user: { users: usersFake } } };

describe('UserList', () => {
  it('renders properly', () => {
    const wrapper = mount(UserList, {
      global: {
        plugins: [createTestingPinia(initUserStore), vuetify],
      },
    });
    expect(wrapper.element).toBeTruthy();
  });
});
