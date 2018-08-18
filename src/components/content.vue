<template>
  <div id="content1">
    <span @click="goback()">返回</span><p @click="goa()" v-text="msg"></p>
    <div id="sss"><iframe id="iframe11"></iframe></div>
  </div>

</template>


<script>

  export default {
    name: 'content1',
    data() {
      return {
        msg: '我是显示详情的页面啦,点击我显示新闻详情页',
        a:''
      }
    },
    methods: {
      goa() {

        var docid=this.$route.params.docid;
        console.log(docid)
        document.getElementById("iframe11").setAttribute("src",'https://3g.163.com/all/article/' + docid + '.html ');
      },
      goback(){
        this.$router.back(-1);
      }
    },

    mounted() {
      var docid = this.$route.params.docid;
      var url = 'https://3g.163.com/all/article/' + docid + '.html';


    }
  }

</script>

<style lang="scss" scoped>

span{
  float: left;
  position: absolute;
  top: 80px;
  /*background-image: url("../assets/logo.png");*/
}
  li {
    height: 3.4rem;

    line-height: 3.4rem;

    /*boder-bottom:1px solid #eee;*/

    font-size: 1.6rem;
  }

  a {
    color: #666;
  }

  p {
    display: block;
    text-align: center;
    font-size: 30px;
    /*color:snow;*/
    height: 60px;
    background: aqua;
    line-height: 60px;
    width: 1319px;
  }
#sss{
  width: 600px;
}
  iframe {
    position: absolute;
    left: 40%;
    width: 400px;
    margin-top: 10px;
    height: 500px;
  }


</style>
