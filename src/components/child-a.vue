<template>
    <div>
        <!-- <button @click="text">+1(这是原始方法)</button> -->
        <button @click="text">+1(这是原始方法带载荷)</button>
        <button @click="addAge(100)">+100(这是通过辅助函数将store中的方法解构在当前组件中)</button>
        <button @click="text1">定时器异步函数</button>
        <button @click="getAsyncCount(9999)"></button>
        <div>
            {{$store.getters.filterList}}
        </div>
        <div>
            {{filterList}}
        </div>
    
        
    </div>
</template>

<script>
import { mapMutations , mapActions , mapGetters} from 'vuex'

    export default {
        computed:{
            ...mapGetters(['filterList'])
        },
        methods: {
            //   text(){
            //     this.$store.commit('addCount')
            //   }
            text() {
                this.$store.commit('addCount', 10)
            },
            text1(){
                this.$store.dispatch('getAsyncCount',123)
            },
            ...mapMutations(['addAge']),
            ...mapActions(['getAsyncCount'])
        },
    }
</script>

<style>

</style>