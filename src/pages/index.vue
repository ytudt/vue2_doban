<template>
  <div>
    <ul class="movie-taps clr">
      <li class="movie-tap" v-bind:class="{active:item.isActive}" v-for="item in movieTypes" @click="getMovieList(item)">{{item.title}}</li>
      <!-- <li class="movie-tap">即将上映</li>
    <li class="movie-tap">口碑榜</li>
    <li class="movie-tap">TOP250</li> -->
    </ul>
    <ul class="movieLists clr" v-show="!isLoading">
      <li class="movieList" v-for="item in list" track-by="$index">
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
.movie-taps {
  width: 100%;
  height: 4rem;
  /*margin-top:20px;*/
}

.movie-tap {
  width: 33.3%;
  float: left;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
}


/*.movie-tap:hover{

}*/

.movie-tap.active {
  background: rgba(0, 0, 0, .5);
}

.movieLists {
  width: 100%;
  margin: 20px 0;
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
  PULL_LIST,
  MODIFY_TAB
} from '../store/modules/indexList'
import {
  IS_LOADED,
  IS_LOADING,
  SAVE_SCROLL_TOP
} from '../store/index.js'
import pullList from '../mixins/pullList'

export default {
  mixins: [pullList],
  components: {
    Loading
  },
  data() {
    return {
      // serverUrl:'this.$store.state.isLoading',
      movieTypes: [{
        title: '正在热映',
        url: '/v2/movie/in_theaters',
        // isActive:true
      }, {
        title: '即将上映',
        url: '/v2/movie/coming_soon'
      }, {
        title: 'TOP250',
        url: '/v2/movie/top250'
      }],
      list: [],
      downLoading: true,
      routePath:this.$route.path
    }
  },
  computed: {
    isLoading: function() {
        return this.$store.state.isLoading
      }
      // return
      // }
  },
  created() {



    // setInterval(function(){
    //   console.log(document.body.scrollTop)
    // },2000)
    window.addEventListener('scroll',function(){
      console.log(document.body.scrollTop)
    })
    // wrap.addEventListener('scroll',function(){
    //   console.log(222)
    // })
    modifyTab(this.movieTypes, this.$store.state.indexList.activeTitle);
    var that = this;
    if (this.$store.state.indexList.list.length != 0) {
      this.list = this.$store.state.indexList.list;
      this.IS_LOADED();
      this.downLoading = false;
      this.$nextTick(function(){
        window.scrollTo(0,this.$store.state.scrollTop[this.routePath]);

      })
    } else {
      this.$http.get(config.serverUrl + '/v2/movie/in_theaters').then((response) => {
        this.PULL_LIST(response.body.subjects);
        this.IS_LOADED();
        this.list = response.body.subjects;
        this.isLoading = false;
        this.downLoading = false;

      }, (response) => {});
    }
  },
  beforeDestroy(){
    console.log(222)
    this.SAVE_SCROLL_TOP({
      routerPath:this.routePath,
      scrollTop:document.body.scrollTop
    })
  },
  methods: {
    ...mapActions([PULL_LIST, IS_LOADED, IS_LOADING, MODIFY_TAB,SAVE_SCROLL_TOP]),
    getMovieList(item) {
      if (item.isActive || this.downLoading) {
        return
      } else {
        this.downLoading = true;
        this.MODIFY_TAB(item.title);
        this.IS_LOADING();
        for (let i = 0; i < this.movieTypes.length; i++) {
          this.movieTypes[i].isActive = false;
        }
        item.isActive = true;
        this.$http.get(config.serverUrl + item.url).then((response) => {
          this.PULL_LIST(response.body.subjects);
          this.IS_LOADED();
          this.list = response.body.subjects;
          this.isLoading = false;
          this.downLoading = false;
        }, (response) => {});
      }

    }
  }


}

function modifyTab(arr, activeTitle) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === activeTitle) {
      arr[i].isActive = true;
    } else {
      arr[i].isActive = false;
    }
  }
}
</script>
