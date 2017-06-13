<template>
    <div class="h">
        <div class="h_c">
            <div class="h_lf lf">
                <!--<img class="logo" src="../../logo.png">-->
            </div>
            <ul class="h_rg rg ov">
                <li>
                	<router-link to="/home">首页</router-link>
                </li>
                <li>
                	<router-link to="/bigshot">大咖专区</router-link>
                </li>
                <li>
                	<router-link to="/about">关于我们</router-link>
                </li>
                <li>
                	<router-link to="/contact">联系我们</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import '@/assets/reset.css'
export default {

}
</script>

<style scoped>

.h {
    height: 100px;
}

.h_c {
    width: 1032px;
    height: 100px;
    margin: 0 auto;
    /*background: #ccc;*/
}

.h_lf {
    width: 250px;
    height: 100px;
    padding: 0 20px;
    margin-right: 314px;
    background: red;
    float: left;
}

.h_lf .logo {
    width: 60px;
    height: 60px;

    margin: 20px 16px 0 0;
}

.h_rg {

    float: right;
    height: 100px;
}

.h_rg li {
    width: 98px;
    height: 100px;
    /*line-height: 100px;*/
    padding-top: 44px;
    text-align: center;
    float: left;
}
</style>
