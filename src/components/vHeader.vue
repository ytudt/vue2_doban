<template>
<header class="headerWrap">
  <i class="icon_menu el-icon-menu"></i>
  豆瓣电影
  <router-link :to="{ path: 'index' }">index</router-link>
    <router-link :to="{ path: 'top250' }">top250</router-link>
</header>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerWrap{
  background:#036bc4;
  height: 3.6rem;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  line-height: 3.6rem;
}
.icon_menu{
  display: inline-block;
  width: 2rem;
  height: 2rem;
  float: left;
  margin-left: 1rem;
  position: relative;
  top: 50%;
  transform:translate(0,-50%);
}
</style>
<script>
export default {
  name: 'vHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


