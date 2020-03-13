<template>
  <div class="hot">hot</div>
</template>

<script>
import { commonMixin } from '../utils/mixin'
export default {
  mixins: [commonMixin],
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.setChannel(0)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.setChannel(0)
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style>
</style>
