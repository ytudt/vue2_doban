<template>
  <div class="father">
    <v-header class="header"></v-header>
    <transition name="fade">
      <router-view class="wrap"></router-view>
    </transition>
  </div>
</template>
<style scoped lang="scss">
@import "./scss/common.scss";
.header {
  position: absolute;
  width: 100%;
}
.mt-header{
background:#036bc4 !important;
  height: 3.6rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s
}

.fade-enter {
  transform: translate(400px, 0);
}

.fade-leave-active {
  transform: translate(-400px, 0);
}

.father {
  min-height: 100%;
}

.wrap {
  width: 100%;
  position: absolute;
  top: 3.6rem;
  bottom: 0;
  bottom: 0;
  background:$color_background;
  /* min-height: 100%; */
}
</style>
<script>
// import Hello from './components/Hello'
import vHeader from './components/vHeader'

export default {
  components: {
    vHeader
  }

}
</script>
<style>
.wrap {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter {
  left: 0px
}

.fade-leave-active {
  left: 100px
}
</style>
