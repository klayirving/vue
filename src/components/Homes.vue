<template>
<div id="home">

  <div class="searchBox" >
    <div class="search-wrapper">
      <input class="searchInput" type="text" v-model="t1" @keyup="get($event)" @keydown.down="next"
             @keydown.up.prevent="last">
      <button v-on:click="searcher">百度一下</button>
    </div>
    <ul><li v-on:click="searchLink(index)" v-for="(value, index) in searchList" :class="{active: index == now}">{{value}}</li></ul>
  </div>
</div>
</template>

<script>
  // 1.引入

    export default {
        name: "#home",
      data(){
          return {
            searchList: [],//搜索弹出列表
            t1: '',//输入框里面的值
            now: -1//输入框里面的值的索引，0为列表第一项
          }
      },
      methods: {
        get: function (evt) {
          if (evt.keyCode == 13) {
            window.open('https://wwww.baidu.com/s?wd=' + this.t1)
            this.t1 = ''
          }
          if (evt.keyCode == 38 || evt.keyCode == 40) return
          this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {//跨域请求数据
            params: {
              wd: this.t1//输入的关键词
            },
            jsonp: 'cb'//这里是callback
          }).then((res) => {//请求成功回调，请求来的数据赋给searchList数组
            this.searchList = res.body.s
          }, (res) => {//失败显示状态码
            alert(res.status)
          })
        },
        searchLink: function(index) {//鼠标点击跳转
          this.t1 = this.searchList[index]
          this.now = index
          window.open('https://www.baidu.com/s?wd=' + this.t1)
          this.t1 = ''
        },
        searcher:function()
        {
          window.open('https://www.baidu.com/s?wd=' + this.t1)
        },
        next: function () {//向下选择
          this.now++
          if (this.now == this.searchList.length) {//判断是否超出
            this.now = 0
          }
          this.t1 = this.searchList[this.now]
        },
        last: function () {//向上选择
          this.now--;
          if (this.now < 0) {
            this.now = this.searchList.length - 1
          }
          this.t1 = this.searchList[this.now]
        }
      }




    }
</script>

<style scoped>
#home{
  background: url("https://api.dujin.org/bing/1920.php");
  height:900px ;
}
  .searchBox{
    position: absolute;
    top:200px;
    left: 600px;
  }
  input {
    border-radius: 10px;
    font-size: 30px;
  }
  button{
    border-radius: 10px;
    margin-left: 10px;
    font-size: 30px;
    width: 150px;
    height: 42px;
  }
  ul{
    list-style: none;
  }
  ul li {
    text-align: left;
    font-size: 20px;
    margin-bottom: 8px;

  }
  .search-wrapper{
    width:500px;

  }
  ul li:hover{
    background-color: aqua;
  }
</style>
