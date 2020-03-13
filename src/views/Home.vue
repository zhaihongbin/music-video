<template>
  <div class="home">
    <p-c v-if="device==='pc'"></p-c>
    <phone v-if="device==='phone'"></phone>
  </div>
</template>

<script>
// @ is an alias to /src
import { commonMixin } from '../utils/mixin'
import PC from '../components/pc/PC'
import Phone from '../components/phone/Phone'
export default {
  mixins: [commonMixin],
  name: 'Home',
  components: {
    PC, Phone
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.home {
  width: 100%;
  height: 100%;
  @include flex-center;
  font-size: 2rem;
}
</style>
