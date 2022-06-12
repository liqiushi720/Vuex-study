<template>
    <div>
        <!-- <button @click="text">+1(这是原始方法)</button> -->
        <button @click="text">+1(这是原始方法带载荷)</button>
        <button @click="addAge(100)">+100(这是通过辅助函数将store中的方法解构在当前组件中)</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        methods: {
            //   text(){
            //     this.$store.commit('addCount')
            //   }
            text() {
                this.$store.commit('addCount', 10)
            },
            ...mapMutations(['addAge'])
        },
    }
</script>

<style>

</style>