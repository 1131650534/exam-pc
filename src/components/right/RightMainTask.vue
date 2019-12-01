<template>
    <div class="rightmain">
        <TaskNav class="a"></TaskNav>
       
    </div>
</template>

<script>
import TaskNav from "./Task-Nav";
    export default {
        name:'rightmain',
        components:{
            TaskNav
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