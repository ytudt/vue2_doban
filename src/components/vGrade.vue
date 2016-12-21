<template>
  <span class="rating-stars">

  <span v-for="item in  full" class="rating-star rating-star-medium-full"></span>
  <span v-for="item in half" class="rating-star rating-star-medium-half"></span>
  <span v-for="item in gray" class="rating-star rating-star-medium-gray"></span>
  <span class="grade" v-show="grade!==0">{{grade}}分</span>
  </span>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rating-star {
  display: inline-block;
  width: 16px;
  height: 16px;
  /*margin: 0 2px;*/
  background-size: 16px 16px;
}

.rating-star-medium-full {
  background: url('./img/start_full.png');
  background-size: 16px 16px;
}

.rating-star-medium-half {
  background: url('./img/start_half.png');
  background-size: 16px 16px;
}

.rating-star-medium-gray {
  background: url('./img/start_gray.png');
  background-size: 16px 16px;
}

.grade {
  color: #df5001;
  margin: 0 10px;
}
</style>
<script>
export default {
  props: ['grade'],
  computed: {
    full:function(){
      return parseInt(this.grade)%2!==0? Math.ceil(this.grade/2):Math.floor(this.grade/2);
    },
    half:function(){
      return (parseInt(this.grade)%2==0&&this.grade%1>0)?1:0;
    },
    gray:function(){
      return 5-this.full-this.half;
    }
  }

}
</script>
