<template>
    <div>
        <ul>
            <li v-for="movieDetail in movieDetails">
                <div class="imgWrap">
                    <img :src="movieDetail.images.large" alt="">
                    <!-- </div> -->
                    <div class="infoWrap">
                        <h2>{{movieDetail.title}}</h2>
                        <ul class="casts clr">
                            <li class="cast" v-for="cast in movieDetail.casts" track-by="$index">
                                {{cast.name}} /
                            </li>
                        </ul>
                    </div>
            </li>
        </ul>
        </div>
</template>
<style>
.imgWrap {
    width: 100%;
    text-align: center;
    position: relative;
    /*top:3.6rem;*/
    margin: 0 auto;
}

.imgWrap img {
    width: 50%;
}

.infoWrap {
    margin: 0 auto;
    text-align: center;
}

h2 {
    margin: 10px;
}

.casts {
    width: auto;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    margin: 5px 0;
}

.cast {
    float: left;
    color: blue;
    margin: 0 auto;
}
</style>
<script>
import config from '../config'
export default {
    data() {
            return {
                movieDetails: []
            }
        },
        created() {
            let id = this.$route.query.id
            this.$http.get(config.serverUrl+'/v2/movie/subject/' + id).then((response) => {
                this.movieDetails.push(response.body)


            }, (response) => {});

        }




}
</script>
