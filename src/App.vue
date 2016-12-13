<template>
  <div>
    <v-header class="header"></v-header>
    <transition name="fade">
      <router-view class="wrap"></router-view>
    </transition>
  </div>
</template>
<style scoped>
.header {
  position: absolute;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s
}

.fade-enter {
  transform: translate(400px, 0);
}

.fade-leave-active {
  transform: translate(-400px, 0);
}

.wrap {
  width: 100%;
  position: relative;
  top: 3.6rem;
  bottom: 0;
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
