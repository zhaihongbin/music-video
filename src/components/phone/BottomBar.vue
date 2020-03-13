<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left" :class="{selected:checkSelected(1)}" @click="go(1)">
      <span class="icon-music"></span>
    </div>
    <div class="bottom-bar-middle" :class="{selected:checkSelected(0)}" @click="go(0)">
      <span class="icon-search"></span>
    </div>
    <div class="bottom-bar-right" :class="{selected:checkSelected(2)}" @click="go(2)">
      <span class="icon-video"></span>
    </div>
  </div>
</template>

<script>
import { commonMixin } from '../../utils/mixin'
export default {
  mixins: [commonMixin],
  methods: {
    go (key) {
      if (key !== this.channel) {
        switch (key) {
          case 0:
            this.$router.push({ name: 'Hot' })
            break
          case 1:
            this.$router.push({ name: 'Music' })
            break
          case 2:
            this.$router.push({ name: 'Video' })
            break
        }
      }
    },
    checkSelected (key) {
      if (key === this.channel) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.bottom-bar {
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: 0;
  display: flex;
  // background-color: #f1f1f1;
  box-shadow: 0 -0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  .bottom-bar-left {
    flex: 2;
    @include flex-center;
    &.selected {
      color: blue;
    }
    .icon-music {
      font-size: 3rem;
      font-weight: bold;
    }
  }
  .bottom-bar-middle {
    flex: 1;
    @include flex-center;
    &.selected {
      color: blue;
    }
    .icon-search {
      font-size: 3rem;
    }
  }
  .bottom-bar-right {
    flex: 2;
    @include flex-center;
    &.selected {
      color: blue;
    }
    .icon-video {
      font-size: 3.2rem;
      font-weight: bold;
    }
  }
}
</style>
