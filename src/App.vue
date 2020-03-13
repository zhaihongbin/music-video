<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { commonMixin } from './utils/mixin'
export default {
  mixins: [commonMixin],
  methods: {
    initRootFontSize () {
      let ratio = window.innerWidth / 37.5
      if (ratio > 16) { ratio = 16 }
      const rootFontSize = `${ratio * 1}px`
      document.querySelector('html').style.fontSize = rootFontSize
    },
    checkDevice () {
      // Android, iPhone
      const userAgent = window.navigator.userAgent
      if (userAgent.includes('Android') || userAgent.includes('iPhone')) {
        this.setDevice('phone')
      } else {
        this.setDevice('pc')
      }
    }
  },
  created () {
    // 检查访问设备是pc还是phone
    this.checkDevice()
  },
  mounted () {
    // 初始化rem，默认是1rem=10px，最大1rem=16px
    this.initRootFontSize()
  }
}
</script>

<style lang="scss">
@import "./assets/styles/global";
.app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
