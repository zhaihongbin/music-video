<template>
  <div class="music">music</div>
</template>

<script>
import { commonMixin } from '../utils/mixin'
export default {
  mixins: [commonMixin],
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.setChannel(1)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.setChannel(1)
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style>
</style>
