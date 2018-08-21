<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="isDone">show {{ msg }}</div>
    <div v-for="v in listData">
      <span>{{ v }}</span>
    </div>
    <div>{{dataList}}</div>
    <button @click="popFun">点击获取弹层</button>
    <loading :propsData="propsData"></loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import loading from '@/components/loading'

@Component({
  // templete: ''
  components: {
    loading
  }
})
export default class home extends Vue {
  isDone : boolean = true
  msg : string = 'this is a demo'
  listData : Array<any> = ['sdeeee', 'AllenJan', 3] // 或者 any[] = ['sdeeee', 2, 3]
  propsData : string = 'propsData'

  // computed
  get dataList () {
    return this.listData[1]
  }
  // method
  popFun () {
    alert(`hahaha ${this.msg}!`)
  }
  // 钩子
  mounted () {
    // this.popFun()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
