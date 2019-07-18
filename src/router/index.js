import Vue from 'vue';
import Router from 'vue-router';
import HomeContainer from '../views/tabbar/HomeContainer';
import MemberContainer from '../views/tabbar/MemberContainer';
import ShopcarContainer from '../views/tabbar/ShopcarContainer';
import SearchContainer from '../views/tabbar/SearchContainer';
import NewsList from '../views/news/NewsList';
import NewsInfo from '../views/news/NewsInfo';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeContainer,
    },
    {
      path: '/member',
      name: 'member',
      component: MemberContainer,
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopcarContainer,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchContainer,
    },
    {
      path: '/home/newslist',
      name: 'news',
      component: NewsList,
    },
    {
      path: '/home/newsinfo/:id',
      name: 'newsinfo',
      component: NewsInfo,
    },
  ],
  linkActiveClass: 'mui-active',
});
