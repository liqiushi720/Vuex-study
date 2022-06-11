import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 配置项
  state:{
    count:0,
    liqiushi:720
  }
})

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  store
}).$mount('#app')
