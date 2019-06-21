import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';

import '../plugins/element';
global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;
// import 'element-ui/lib/theme-chalk/index.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
