<template>
  <div class="video">video</div>
</template>

<script>
import { commonMixin } from '../utils/mixin'
export default {
  mixins: [commonMixin],
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.setChannel(2)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.setChannel(2)
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style>
</style>
