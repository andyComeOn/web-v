<template>
    <div id="app">
        <navs></navs>
        <home></home>
        <foot></foot>
        <router-view></router-view>
    </div>
</template>

<script>
import Navs from '@/components/Navs'
import Home from '@/components/Home'
import Foot from '@/components/Foot'

export default {
    name: 'app',
    components:{
        Navs,
        Home,
        Foot
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
