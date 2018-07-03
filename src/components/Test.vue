<template>
  <div>
    <h1>to di list</h1>
    <input type="text" name="newItem" v-model="newItem" v-on:keyup.enter="addNewItem(newItem)">
    <!-- <button v-on:click="addNewItem(newItem)">新增</button> -->
    <p>待办事项</p>
    <div>
      <ul>
        <li v-for="item in items" :key="item.lable" v-bind:class="{finished: item.isFinished}" v-on:click="changeFinished(item)">{{item.lable}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      items: [{
        lable: 'node',
        isFinished: true
      }],
      newItem: ''
    }
  },
  methods: {
    addNewItem: function (newItem) {
      if (!newItem) {
        alert('请输入新增任务')
        return
      }
      for (let i = 0; i < this.items.length; i++) {
        if (newItem === this.items[i].lable) {
          alert('该事物已在列表中')
          return
        }
      }
      console.log(newItem)
      this.items.push({
        lable: newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    changeFinished: function (item) {
      item.isFinished = !item.isFinished
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 10px 10px;
}
a {
  color: #42b983;
}
.finished{
  text-decoration: underline;
  color: red;
}
</style>
