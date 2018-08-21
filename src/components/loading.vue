<template>
  <div class="loading">
    {{msg}}--{{propsData}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propsData: String
  }
})
export default class loading extends Vue {
  msg : string = 'loading page'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
