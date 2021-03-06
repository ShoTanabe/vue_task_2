import Vue from 'vue';
import App from './App.vue';

import router from './router';

// fontawesomeの読み込み
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// fontawesomeの読み込みここまで



Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');


require('@/assets/css/destyle.css');
