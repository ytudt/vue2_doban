<template>
  <div class="loading-wrap">
    <div class="center">
      <i class="douban-logo"></i>
      <h2 class="text-wrap">加载中...</h2>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-wrap {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  text-align: center;
  min-height: 100%;
}

.douban-logo {
  display: inline-block;
  width: 48px;
  height: 48px;
  background: url(./img/logo.png) center center;
  background-size: 48px 48px;
  /*position: relative;
  top: 40%;*/
}

.text-wrap {


  color: #b2b2b2;
  font-size: 14px;
  /*display: block;*/
}
</style>
<script>
export default {

}
</script>
