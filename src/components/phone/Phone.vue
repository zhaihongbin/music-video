<template>
  <div class="phone-page">
    <router-view/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from './BottomBar'
export default {
  components: {
    BottomBar
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.phone-page {
  width: 100%;
  height: 100%;
}
</style>
