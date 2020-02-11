import Vue from 'vue';
import axiosBase from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

axiosBase.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
