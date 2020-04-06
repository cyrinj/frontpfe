// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
Vue.use(Notifications)
import VueGoodWizard from 'vue-good-wizard';
Vue.use(VueGoodWizard);
import store from  './store'
import moment from 'vue-moment';
Vue.use(moment);

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)

require('../node_modules/bulma/css/bulma.css')

// CommonJS


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  template: '<App/>',
  components: { App }
})
