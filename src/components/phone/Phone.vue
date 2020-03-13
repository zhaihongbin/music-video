<template>
  <div class="phone">
    <router-view />
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from './BottomBar'
export default {
  components: {
    BottomBar
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.phone {
  width: 100%;
  height: 100%;
}
</style>
