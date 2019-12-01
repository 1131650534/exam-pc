<template>
    <div class="rightmain">
        <Nav class="a"></Nav>
       
    </div>
</template>

<script>
import Nav from "./Nav";
    export default {
        name:'rightmain',
        components:{
            Nav
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.rightmain{
    border-radius: 12px;
    margin-left: 5px;
    // border: 1px solid red;
    
}
</style>