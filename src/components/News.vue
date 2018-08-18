<template>
  <div id="news">
    <div class="left">
      <ul>
        <li @click="get(keya)" v-for="(item,keya) in items">{{item}}</li>
      </ul>
    </div>

    <div class="right">
      <!--<h1 v-if="show">接口数据慢，所以请稍等~</h1>-->
      <!--<vue-scroll :ops="ops">-->
      <ul class="list">

          <li v-for="(item,key) in list">
            <div class="center">
            <router-link :to="'/content/'+item.docid"><h3>{{item.title}}</h3>
              <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1534475310&di=acc9e5aa10348a40fbfc06f3dd62c92f&src=http://cdnq.duitang.com/uploads/item/201501/23/20150123003528_Qxz2a.thumb.700_0.jpeg"><h4>{{item.digest}}</h4><h5>{{item.ptime}}</h5>
            </router-link>

            </div>
          </li>

      </ul>
      <!--</vue-scroll>-->
    </div>
  </div>

</template>


<script>
  import axios from 'axios';

  export default {
    name: 'news',
    data() {
      return {
        msg: '我是一个新闻组件',
        list: [],
        items: ["头条新闻", "汽车新闻", "财经新闻", "体育新闻", "综合新闻", "军事新闻", "娱乐新闻", "科技新闻"],
        show: true,
        aa: '',
        its:[]
      }
    },
    methods: {
      get(keya) {

        switch (keya) {
          case 0:
            this.requestData();
            break;
          case 1:
            this.requestData1();
            break;
          case 2:
            this.requestData2();
            break;
          case 3:
            this.requestData3();
            break;
          case 4:
            this.requestData4();
            break;
          case 5:
            this.requestData5();
            break;
          case 6:
            this.requestData6();
            break;
          case 7:
            this.requestData7();
            break;
          default:
            break;
        }
      },
      requestData() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.toutiao;//头条新闻
          console.log(a);
        }, function (err) {
          console.log(err);
        });

      },
      requestData1() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.auto//汽车新闻
        }, function (err) {
          console.log(err);
        })
      },
      requestData2() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.money//财经新闻
        }, function (err) {
          console.log(err);
        })
      },
      requestData3() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.sports //体育新闻
        }, function (err) {
          console.log(err);
        })
      },
      requestData4() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.dy  //电影新闻
        }, function (err) {
          console.log(err);
        })
      },
      requestData5() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.war//军事新闻
        }, function (err) {
          console.log(err);
        })
      },
      requestData6() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.ent//国内新闻
        }, function (err) {
          console.log(err);
        })
      },
      requestData7() {
        this.show = false;
        var a = 'https://www.apiopen.top/journalismApi';
        axios.get(a).then((res) => {
          console.log(res);
          this.list = res.data.data.tech//科技新闻
        }, function (err) {
          console.log(err);
        })
      },

    },

    mounted() {

      // alert("由于新闻详情接口原因，查看新闻的详细页面，会打开新链接的哦，亲!");
      this.requestData();
    }
  }


</script>

<style lang="scss" scoped>
  span {
  }

  img {
    width: 60px;
    height: 40px;
    display: block;
    float: left;
    position: absolute;

  }

  #news {

  }

  .left {
    border-right: #8e8e8e 1px solid;
  }
.left ul{
height: 60px;
  background: red;
  overflow: hidden;
}
  .left li {
    font-size: 30px;
    height: 50px;
    /*color: snow;*/
    text-align: center;
    font-weight: bold;
    font-family: "Adobe 楷体 Std R";
    float: left;
    margin: 20px;
  }

  .right {
    position: absolute;

    background: url("https://api.dujin.org/bing/1920.php");

  }


  .left li:hover {
  color: hotpink;
  }

  a {
    text-align: center;
    /*color: snow;*/
    text-decoration: none;

  }

h3{
  text-align: left;
}
.right ul {
  width: 1582px;
}
  .right li {
    overflow:hidden ;
    height: 80px;
    color: snow;
    margin-bottom: 14px;
    margin-top: 14px;
    text-align: left;
    border: #8e8e8e solid 1px;
  }

  .right a:hover {
    color: darkslateblue;
  }

  .right li:hover {
    color: turquoise;
  }
a{
color: turquoise;
}
  h1 {
    text-align: center;

    font-size: 40px;
  }
h5{
  text-align: right;
  bottom: 0;
}

</style>
