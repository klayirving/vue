<template>

  <div id="content">
    <h1>{{list.title}}</h1>
    <div v-html="list.body" id="aaaa"></div>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {

    data() {

      return {

        msg: '数据',
        list: [],
      }
    },
    mounted() {
      var id = this.$route.params.id;
      this.requestData(id);


    },
    methods: {

      requestData(id) {

        //get请求如果跨域的话 后台php java 里面要允许跨域请求

        var api = 'https://zhihu-daily.leanapp.cn/api/v1/contents/' + id;

        axios.get(api).then((response) => {
          console.log(response);
          this.list = response.data.CONTENTS;
          var a=this.list;
          delete a[img];
          this.list=a;
        }, (err) => {

          console.log(err)
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  body {
    text-indent: 2em;
    color: snow;
  }


  h1 {
    /*color: snow;*/
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    display: block;
    background: url("../assets/background.png") no-repeat;
  }

  #aaaa {
    /*color: snow;*/
    font-size: 15px;
    color: snow;
    text-indent: 20px;
    background: url("https://api.dujin.org/bing/1920.php");
  }

  html {
    color: #000;
  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset, img {
    border: 0;
  }

  address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
  }

  li {
    list-style: none;
  }

  caption, th {
    text-align: left;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
  }

  q:before, q:after {
    content: '';
  }

  abbr, acronym {
    border: 0;
    font-variant: normal;
  }

  sup {
    vertical-align: text-top;
  }

  sub {
    vertical-align: text-bottom;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  input, textarea, select {
    *font-size: 100%;
  }

  legend {
    color: #000;
  }
</style>
