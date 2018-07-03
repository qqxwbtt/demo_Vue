<template>
  <div>
    <h1>to do list</h1>
    <input type="text" name="newItem" v-model="newItem" v-on:keyup.enter="addNewItem(newItem)">
    <!-- <button v-on:click="addNewItem(newItem)">新增</button> -->
    <p>待办事项</p>
    <div>
      <ul>
        <li v-for="item in items" :key="item.lable">
          <span v-bind:class="{finished: item.isFinished}" v-on:click="changeFinished(item)" v-on:dblclick="editItem(item)"
          >{{item.lable}}</span>
          <span v-show="item.isShow"><input type="text" name="editItemD" v-model="editItemD" v-on:keyup.enter="editItemData(item,editItemD)"></span>
        </li>
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
        isFinished: true,
        isShow: false
      }],
      newItem: '',
      editItemD: ''
    }
  },
  watch: {
    newItem (val, oldVal) {
      console.log(`val is ${val}, oldVal is ${oldVal}`)
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
    },
    editItem: function (item) {
      console.log('doule key')
      item.isEdit = true
      item.isShow = true
    },
    editItemData: function (item, editItemD) {
      for (const i of this.items) {
        console.log('old: ', i.lable)
        console.log('new: ', item.lable)
        if (item.lable === i.lable) {
          i.lable = editItemD
        }
      }
      item.isShow = false
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
