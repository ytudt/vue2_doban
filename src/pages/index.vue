<template>
  <div>
  <ul class="movieLists">

    <li class="movieList" v-for="item in movieList" track-by="$index">
    <router-link :to="{ path: 'movieDetail', params:{item:item},query:{item:item}}" >
    <div>
      <img :src="item.images.small" alt="">
    </div>
    <span class="movieName">{{item.title}}</span>
  </router-link>
   </li>

  </ul>

  </div>
</template>
<style>
  .movieLists{
    width: 100%;
  }
  .movieList{
    width: 33.3%;
    float: left;
    text-align: center;
  }
  .movieName{
     white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    margin:1rem 0;

  }
</style>
<script>
export default {
  data() {
      return {
        movieList: []
      }
    },
    created() {
      console.log('created');
      this.$http.get('https://api.douban.com/v2/movie/in_theaters').then((response) => {
        // console.log(response)
        this.movieList=response.body.subjects;
        // console.log(JSON.stringify(this.movieList))

      }, (response) => {});
    },
    methods:{
      // showDetail(item){
      //   console.log(this.$route)
      //   console.log(this.$route.router)
      //   console.log(this.router)
      //   // this.$route.go('/movieDetail')
      //   console.log(item)
      // }
    }
}
</script>
