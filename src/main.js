import Vue from 'vue'
import App from './App.vue'
// import vuescroll from 'vuescroll';
// import $ from 'jquery'
// import 'vuescroll/dist/vuescroll.css';
import VueResource from 'vue-resource'
import './assets/basic.scss'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
import router from './router/router.js'
// Vue.use($);
Vue.use(VueResource);
// Vue.use(vuescroll);
// Vue.use(Mint);


// 4、挂载
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
