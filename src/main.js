import Vue from 'vue';
// 请求数据
import VueResource from 'vue-resource';
// import moment from 'moment';
// 按需导入mint-ui
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
import 'mint-ui/lib/style.css';
// 导入mui
import '../static/css/mui.min.css';
import '../static/css/icons-extra.css';
import App from './App';
import router from './router';

Vue.use(VueResource);
Vue.use(router);
// 定义全局过滤器
// Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
//   return moment(dataStr).format(pattern);
// });
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // App是App.vue组件中通过export default导出的APP变量,然后在main.js中通过import导入
  // ES6写法,如果键值对一样,只写一个即可
  components: { App },
  // 先注册App组件,然后在模版中引用
  template: '<App/>',
});
