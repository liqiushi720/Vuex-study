import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 配置项
  state:{
    count:0,
    liqiushi:720
  },
  mutations:{
    // 突变 即数据发生变化 视图层立即发生变化
    // 相当于method里面存储着大量的方法
    addCount(state,playload){//第一个参数是当前store的state属性
      state.count+= playload
    
    },
    addAge(state,playload){
      state.liqiushi +=playload;
      
    }
  }
})

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  store
}).$mount('#app')
