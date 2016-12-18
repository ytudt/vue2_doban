<template>
  <div>
    <ul class="movieLists">
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
import { mapActions} from 'vuex'
import {PULL_LIST} from '../store/modules/indexList'
import {IS_LOADED,IS_LOADING} from '../store/index.js'
import pullList from '../mixins/pullList'

export default {
  mixins: [pullList],
  components: {
    Loading
  },
  data() {
    return {
      // serverUrl:'this.$store.state.isLoading',
      list: []
    }
  },
  computed:{
    isLoading: function(){
      return this.$store.state.isLoading
    }
      // return
    // }
  },
  created() {
    var that = this;
      if (this.$store.state.indexList.list.length != 0) {
        this.list = this.$store.state.indexList.list;
        this.IS_LOADED();
      } else {
        this.$http.get(config.serverUrl + '/v2/movie/in_theaters').then((response) => {
          this.PULL_LIST(response.body.subjects);
          this.IS_LOADED();
          this.list = response.body.subjects;
          this.isLoading = false;

        }, (response) => {});
      }
  },
  methods: {
    ...mapActions([PULL_LIST,IS_LOADED,IS_LOADING]),
  }
}
</script>
