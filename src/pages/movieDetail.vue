<template>
  <div class="movie-detail-wrap">
    <ul>
      <li v-for="movieDetail in list">
        <div class="buy-info"></div>
        <div class="imgWrap">
          <img :src="movieDetail.images.large" alt="">
          <!-- </div> -->
          <div class="infoWrap">
            <h1>{{movieDetail.title}}</h1>
            <div>
              <!-- <i class="icon_menu el-icon-menu"></i> -->
              <v-grade :grade="movieDetail.rating.average"></v-grade>
              <span class="ck-link" v-show="movieDetail.rating.average!==0">{{movieDetail.comments_count}}人评价</span>
              <span class="ck-link" v-show="movieDetail.rating.average===0">评价人数不足</span>
            </div>
            <ul class="casts clr">
              <li class="cast">{{movieDetail.directors[0].name}}(导演)/</li>
              <li class="cast" v-for="(cast,index) in movieDetail.casts" track-by="index">
                {{cast.name}}<span v-if="index<movieDetail.casts.length-1">/</span>
              </li>
            </ul>
            <!-- <div> -->
              <ul class="types clr">
                <li class="type">类型:</li>
                <li class="type" v-for="(type,index) in movieDetail.genres" track-by="index">
                  {{type}}<span v-if="index<movieDetail.genres.length-1">/</span>
                </li>
              </ul>

              <p>{{movieDetail.year}}上映</p>
              <h2 class="summary-title">剧情简介</h2>
              <div class="summary-wrap">
                <p class="summary">{{movieDetail.summary}}</p>
              </div>

          </div>
      </li>
    </ul>
    <loading v-show="isLoading"></loading>
    </div>
</template>
<style scoped lang="scss">
@import "../scss/common.scss";
.movie-detail-wrap {
  background: $color_background;
}

.imgWrap {
  width: 100%;
  text-align: center;
  position: relative;
  /*top:3.6rem;*/
  margin: 0 auto;
  margin: 20px 0;
  font-size: 12px;
}

.imgWrap img {
  width: 156px;
}

.infoWrap {
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
}

.casts,
.types {
  width: auto;
  // display: inline-block;
  margin: 0 auto;
  text-align: center;
  margin: 3px 0;

}

.types {
  // display:block;
  text-align: center;
}

.cast,
.type {
  // float: left;
  color: #006ae2;
  ;
  margin: 0 1px;
  display:inline;
}

.type {
  color: $color_main;
}

.rating_num {
  color: #df5001;
  margin: 0 10px;
}

.ck-link {
  color: #006ae2;
}
.summary-title{
  text-align:left;
  margin:10px 0 10px 10px;
}
.summary-wrap{
  padding:0 10px;
  box-sizing:border-box;

}
.summary{
  font-size:14px;
  text-align:left;
  background:#fff;
  // margin:0 5px;
  padding: 8px;
  line-height:20px;
  display:inline-block;
  box-sizing:border-box;
}
</style>
<script>
import {
  mapActions
} from 'vuex'
// import { ElRadio } from 'element-ui'
import Loading from '../components/Loading.vue'
import vGrade from '../components/vGrade.vue'
import config from '../config'
import pullList from '../mixins/pullList'
export default {
  mixins: [pullList],
  components: {
    Loading,
    vGrade

  },
  data() {
    return {
      list: [],
      radio: '1',
      grade: 14,
      serverUrl: config.serverUrl + '/v2/movie/subject/' + this.$route.query.id
    }
  },
  created() {
    console.log(this.list)
      // console.log(this.serverUrl)
      // let id = this.$route.query.id
      // this.$http.get(config.serverUrl + '/v2/movie/subject/' + id).then((response) => {
      //   this.movieDetails.push(response.body)
      //   this.IS_LOADED()
      // }, (response) => {});

  }




}
</script>
