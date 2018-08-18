import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


// 5、定义数据

/*1.state在vuex中用于存储数据*/
var state={
  items:[],
  count:1
};


// 6、定义方法	 mutations里面放的是方法，方法主要用于改变state里面的数据

var mutations={

  incCount(data){
    state.items=data;
  }
};




// 暴露

// 实例化
const store = new Vuex.Store({
  state,
  mutations
});


export default store;


