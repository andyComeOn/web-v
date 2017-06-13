<template>
    <div id="app">
       
        <router-view></router-view>
        <nav></nav>
        <home></home>
        <foot></foot>

    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Foot from '@/components/Foot'
import Home from '@/components/Home'

export default {
    name: 'app',
    components:{
        Nav,
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
