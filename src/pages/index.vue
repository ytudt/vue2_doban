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
console.log(config)
export default {
    components: {
        Loading
    },
    data() {
        return {
          isLoading:true,
            movieList: []
        }
    },
    created() {
        console.log('created');
        this.$http.get(config.serverUrl+'/v2/movie/in_theaters').then((response) => {
            // console.log(response)
            this.movieList = response.body.subjects;
            this.isLoading=false;
            // console.log(JSON.stringify(this.movieList))

        }, (response) => {});
    },
    methods: {
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
