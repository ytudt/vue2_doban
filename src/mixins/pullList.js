// import is from 'is'
// import util from 'util'
// import routeData from 'route-data'

// const getPageKey = () => {
//     return is.object(history.state) ? history.state.key : location.href
// }
import { mapActions } from 'vuex'
import { IS_LOADED, IS_LOADING } from '../store/index.js'
export default {
  // mixins: [routeData],
  // routeData() {
  //     return {
  //         complete: false, //数据是否加载完成
  //         loading: false, //是否在请求中
  //         page: 1, //当前请求的页数
  //         list: [] //列表的数据
  //     }
  // },
  computed: {
    isLoading: function() {
      return this.$store.state.isLoading
    }

  },
  created() {
    this.IS_LOADING();
    if (this.serverUrl) {
      this.$http.get(this.serverUrl).then((response) => {
        this.list.push(response.body)
        this.IS_LOADED()
      }, (response) => {});
    }
  },
  // ,
  // created() {
  //     if (getPageKey() != this.list.key) { //页面前进
  //         if (this.page == 1) { //首次访问组件
  //             this.pullList()
  //             this.list.key = getPageKey()
  //         } else {
  //             Object.assign(this.$data, this.$options.routeData())
  //             this.$nextTick(() => {
  //                 this.list.key = getPageKey()
  //                 this.pullList()
  //             })
  //         }
  //     } else {
  //         this.loading = false //防止路由切换时，没有执行回调时引发的bug
  //     }
  // },
  // watch: {
  //     $route() {
  //         if (getPageKey() != this.list.key) { //页面前进，则重置数据
  //             Object.assign(this.$data, this.$options.routeData())
  //             this.$nextTick(() => {
  //                 this.list.key = getPageKey()
  //                 this.pullList()
  //             })
  //         } else {
  //             // console.log('后退返回页面，无需任何操作，从缓存中还原数据')
  //         }
  //     }
  // },
  methods: {
    ...mapActions([IS_LOADED, IS_LOADING])
  }
}
