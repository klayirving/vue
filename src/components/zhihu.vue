<template>
  <div id="zhihu">


    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/zhihucontent/'+item.id">{{key+1}}. {{item.title}}</router-link>
      </li>
    </ul>

  </div>

</template>


<script>
  import axios from 'axios';
  export default {
    name:"zhihu",
    data() {
      return {
        msg: '我是一个新闻组件',
        list:[]
      }
    },
    methods: {
      requestData() {
        var api = 'https://zhihu-daily.leanapp.cn/api/v1/last-stories';
        // this.$http.get(api).then((response) => {
        axios.get(api).then((response) => {
          console.log(response);
          this.list = response.data.STORIES.stories;
        }, (err) => {
          console.log(err);
        })

      }
    },
    mounted() {
      this.requestData();
    }
  }
</script>


<style lang="scss" scoped>

  #zhihu{
    width: auto;
    height: 900px;
    background: url("https://api.dujin.org/bing/1920.php") no-repeat;
  }
  ul{
    /*height: 900px;*/
  }
  li {
    height: 35px;

    line-height: 35px;

    boder-bottom: 1px solid #8e8e8e;

    margin-left: 40px;
    font-size: 25px;
  }

  li:hover {
    color: black;
  }

  a {
    text-align: center;
    color: snow;
    text-decoration: none;

  }

  a:hover {
    color: burlywood;
  }

  h1 {
    text-align: center;
    color: #FDF5E6;
    font-size: 40px;
  }

</style>
