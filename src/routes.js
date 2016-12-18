import App from './App'
export default [{
  path: '/',
  component: App,
  children: [{
    path: '/',
    component: resolve => require(['./pages/index.vue'], resolve)
  }, {
    path: '/top250',
    component: resolve => require(['./pages/top250.vue'], resolve)
  }, {
    path: '/movieDetail/',
    component: resolve => require(['./pages/movieDetail.vue'], resolve)
  },
  , {
    path: '/cast/',
    component: resolve => require(['./pages/movieDetail.vue'], resolve)
  }

  ]
}]
