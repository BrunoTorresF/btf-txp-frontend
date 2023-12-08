import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import './assets/main.scss';

import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify).use(createPinia());

app.mount('#app');
