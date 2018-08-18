<template>
  <div id="todolist" class="todo">
    <input type="text" v-model="newa">
    <button v-on:click="addnew">add+</button>
    <div>
      <h1>未完成</h1>
      <ul>
        <li v-for="(item,key) in items" v-if="!item.ischecked">
          <input type="checkbox" v-model="item.ischecked" @change="saveList()" class="aa">
          {{item.value}}
          <button v-on:click="dodelete(key)">Delete List</button>
        </li>
      </ul>
      <hr>
      <hr>
      <h1>已完成</h1>
      <ul>
        <li v-for="(item,key) in items" v-if="item.ischecked">
          <input type="checkbox" v-model="item.ischecked" @change="saveList()" class="aa">
          {{item.value}}
          <button v-on:click="dodelete(key)">Delete List</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todolist',
    data() {
      return {
        newa: '',
        items: []
      }
    },
    methods: {
      addnew() {
        this.items.push({
          value: this.newa,
          ischecked: false,

        });
        this.newa='';
        localStorage.setItem('list', JSON.stringify(this.items))

      },
      dodelete(key) {
        this.items.splice(key, 1)
        localStorage.setItem('list', JSON.stringify(this.items))
      },
      saveList() {
        localStorage.setItem('list', JSON.stringify(this.items))
      }
    },
    mounted() {
      var a = JSON.parse(localStorage.getItem('list'));

      if (a) {  /*注意判断*/
        this.items = a;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #todolist{

  }
  .todo {
    top: 18%;
    left: 35%;
    position: absolute;
  }

  input {
    border-radius: 20px;
    font-size: 20px;
  }

  button {
    border-radius: 20px;
    font-size: 20px;
  }

  .aa {
    border-radius: 20px;
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
li{
  /*color: snow;*/
  font-size: 22px;
}
  h1 {
    /*color: snow;*/
    font-size: 20px;
  }
</style>



