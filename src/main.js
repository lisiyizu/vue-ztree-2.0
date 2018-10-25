// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueztree from 'vue-ztree-2.0/dist/vue-ztree-2.0.umd.min.js'
import 'vue-ztree-2.0/dist/vue-ztree-2.0.css'

Vue.use(vueztree)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
