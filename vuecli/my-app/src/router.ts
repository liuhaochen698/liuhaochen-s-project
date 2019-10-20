import Vue from 'vue';
import Router from 'vue-router';
import movie from './views/Movie/Movie.vue';
import book from './views/Book/Book.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: movie,
    },
    {
      path: '/music',
      name: 'music',
      component: () => import(/* webpackChunkName: "about" */ './views/Music/Music.vue'),
    },
    {
      path: '/book',
      name: 'book',
      component: book,
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "about" */ './views/Chat/Chat.vue'),
    },
    {
      path:"/movie/detail",
      name:"movieDetail",
      component:()=>import("./views/Movie/MovieDetail.vue")
    },
    {
      path:"/book/detail",
      name:"bookDetail",
      component:()=>import("./views/Book/BookDetail.vue")
    },
  ],
});
