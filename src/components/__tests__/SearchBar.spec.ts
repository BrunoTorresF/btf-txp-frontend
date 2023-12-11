import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createVuetify } from 'vuetify';

import SearchBar from '../SearchBar.vue';
import { usersFake } from './users.fake';

export const vuetify = createVuetify();

const initUserStore = {
  initialState: { user: { users: usersFake } },
};

describe('SearchBar', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchBar, {
      global: {
        plugins: [createTestingPinia(initUserStore), vuetify],
      },
    });
    const input = wrapper.get('input');
    expect(input).toBeTruthy();
  });

  it('updates input value', async () => {
    const wrapper = mount(SearchBar, {
      global: {
        plugins: [createTestingPinia(initUserStore), vuetify],
      },
    });

    const input = wrapper.get('input');

    await input.setValue('Leanne');

    expect(input.element.value).toEqual('Leanne');
  });
});
