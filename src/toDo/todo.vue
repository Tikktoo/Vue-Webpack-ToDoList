<template>
    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来要做什么？"
            @keyup.enter="addTodo"
            >

            <!-- 使用item组件 -->
            <!-- :todo="todo" 往子组件item.vue传入todo对象 -->
            <!-- v-for="todo in filteredTodos" 遍历 todos 数组 -->
            <!-- @del="deleteTodo" 接受子组件要触的del方法 -->
            <item :todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @del="deleteTodo"
            
            ></item>
            <!-- 
                用 key 管理可复用的元素
                Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染
                这么做除了使 vue 变得非常快之外，还有其它一些好处。
             -->
            <tabs :filter="filter"
                  :todos="todos"
                  @toggle="toggleFilter"
                  @clearAllCompleted="clearAllCompleted"
            
            ></tabs>

    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0;
export default {
    data(){
        return{
            todos:[],
            filter:'all'
        }
    },

    components:{
        Item,
        Tabs
    },
    //计算
    computed:{
        filteredTodos(){
            if (this.filter === 'all'){
                return this.todos;
            }
            const completed = this.filter === 'completed';

            //将todos数组中，completed 为true的值过滤出来，并返回一个新数组
            return this.todos.filter(todo => completed ===todo.completed);
        }
    },


    methods:{
        addTodo(e){
            if(e.target.value.trim()){
                this.todos.unshift({
                    id:id++,
                    content:e.target.value.trim(),
                    completed:false
                })
                e.target.value ='';
            } else {
                elert('请输入你的计划！');
            }
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo =>todo.id === id),1)
        },
        toggleFilter(state){
            this.filter = state;
        },
        clearAllCompleted(){
            //给todos赋一个新的值（即todo.completed为false的值）
            this.todos = this.todos.filter(todo =>  !todo.completed);
        }
    }
}
</script>

<style lang="stylus" scoped>

    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
   
</style>