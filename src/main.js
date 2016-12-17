// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

//  eslint-disable no-new
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './routes'
import store from './store/'
import './scss/common.scss'
import './css/reset.css'
import './css/index.css'
// import App from './App.vue'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)

// const Bar = { template: '<div>bar111</div>' }
    // const routers =[{path: '/', component: Bar}]
// const routes = [
//     { path: '/', component: App }
// ]
const router = new VueRouter({
  routes
})
new Vue({store, router }).$mount('#app')
