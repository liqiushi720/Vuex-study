<template>
    <div>
        <!-- <button @click="text">+1(这是原始方法)</button> -->
        <button @click="text">+1(这是原始方法带载荷)</button>
    </div>
</template>

<script>
    export default {
        methods: {
            //   text(){
            //     this.$store.commit('addCount')
            //   }
            text() {
                this.$store.commit('addCount', 10)
            }
        },
    }
</script>

<style>

</style>