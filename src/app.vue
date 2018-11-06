<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
    </div>
</template>

<script>
    // 引入header.vue组件
import Header from './toDo/header.vue'
import Footer from './toDo/footer.jsx'
import Todo from './toDo/todo.vue'

export default {
    components:{
        Header,
        Footer,
        Todo,
    }

}
</script>


<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #555
        opacity 0.5
        z-index -1
    }


</style>

