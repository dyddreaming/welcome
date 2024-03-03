import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueKnobControl from 'vue-knob-control'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueKnobControl)
Vue.component('knob-control', VueKnobControl)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
