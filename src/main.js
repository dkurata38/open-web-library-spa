import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Book from './Book.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    {path: '/book', component: Book},
    {path: '*', component: App}
    ];

const router = new VueRouter({routes: routes});

new Vue({
  router
}).$mount('#app');
