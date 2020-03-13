<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left" @click="go('music')">
      <span class="icon-music"></span>
    </div>
    <div class="bottom-bar-middle" @click="search">
      <span class="icon-search"></span>
    </div>
    <div class="bottom-bar-right" @click="go('video')">
      <span class="icon-video"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go (channel) {
      if (channel === 'music') {
        this.$router.push('music')
      } else {
        this.$router.push('video')
      }
    },
    search () { }
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
    .icon-music {
      font-size: 3rem;
      font-weight: bold;
    }
  }
  .bottom-bar-middle {
    flex: 1;
    @include flex-center;
    .icon-search {
      font-size: 3rem;
    }
  }
  .bottom-bar-right {
    flex: 2;
    @include flex-center;

    .icon-video {
      font-size: 3.2rem;
      font-weight: bold;
    }
  }
}
</style>
