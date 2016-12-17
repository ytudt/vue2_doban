<template>
  <div>
    <ul class="movieLists">
      <li class="movieList" v-for="item in movieList" track-by="$index">
        <router-link :to="{ path: 'movieDetail', query:{id:item.id}}">
          <div>
            <img :src="item.images.small" alt="">
          </div>
          <span class="movieName">{{item.title}}</span>
        </router-link>
      </li>
    </ul>
    <!-- <loading ></loading> -->
    <loading v-show="isLoading"></loading>
  </div>
</template>
<style>
.movieLists {
  width: 100%;
}

.movieList {
  width: 33.3%;
  float: left;
  text-align: center;
}

.movieName {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1rem 0;
}
</style>
<script>
import Loading from '../components/Loading.vue'
import config from '../config'
import {
  mapActions
} from 'vuex'
import {
  PULL_LIST
} from '../store/modules/indexList'
console.log(config)
export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: true,
      movieList: []
    }
  },
  created() {
    var that = this;
    setTimeout(function() {
      if (that.$store.state.indexList.list.length != 0) {
        that.movieList = that.$store.state.indexList.list;
        that.isLoading = false;
      } else {
        that.$http.get(config.serverUrl + '/v2/movie/in_theaters').then((response) => {
          that.PULL_LIST(response.body.subjects);
          that.movieList = response.body.subjects;
          that.isLoading = false;

        }, (response) => {});
      }
    },1000)



  },
  methods: {
    ...mapActions([PULL_LIST]),
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
