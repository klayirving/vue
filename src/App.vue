<template>
  <div id="app">
    <div class="header">
      <router-link to="/homes">首页</router-link>
      <router-link to="/news">最新新闻</router-link>
      <router-link to="/todolist">TodoList</router-link>
      <router-link to="/zhihu">知乎热文</router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
      }
    },methods:{

    }
  }
</script>

<style lang="scss" scoped>

  .header {
    height: 60px;
    background-color: #063636;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    overflow: hidden;
  }
  a {
    color: snow;
    padding: 15px;
  }
  a:hover{
    color:slateblue;
  }
</style>
