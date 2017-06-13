<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <!--<headers></headers>-->
        <router-view></router-view>
        <shouye></shouye>
        <foot></foot>

    </div>
</template>

<script>
import Headers from '@/components/common/Header'
import Foot from '@/components/common/Foot'
import Shouye from '@/components/Shouye'

export default {
    name: 'app',
    components:{
        Headers,
        Foot,
        Shouye,
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
