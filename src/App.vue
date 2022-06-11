<template>
  <div id="app">
      <div>原始版本{{$store.state.count}}</div>
      <div>计算属性版本{{count}}</div>
      <div>计算属性版本{{count}}</div>
      <div>计算属性版本{{liqiushi}}</div>
      
      
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed:{
    // count(){
    //   return this.$store.state.count
    // }
    // 辅助函数 mapState
    ...mapState(['count','liqiushi'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
