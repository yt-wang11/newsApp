<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='item in lunbotuList' :key='item.id'>
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格到六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src='../../../static/images/menu1.png'>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src='../../../static/images/menu2.png'>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src='../../../static/images/menu3.png'>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src='../../../static/images/menu4.png'>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src='../../../static/images/menu5.png'>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src='../../../static/images/menu6.png'>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/libs/api.request';
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      // 保存轮播图
      lunbotuList: [],
    };
  },
  created() {
    this.$nextTick(() => {
      this.getLunbotu();
    });
  },
  methods: {
    getLunbotu() {
      // 原来写ajax的地方现在改为axios;.request是请求方法的别名
      axios.request({
        url: '222802/getSlideInfo',
        method: 'get',
        params: {},
      }).then((result) => {
        console.log(result);
        if (result.status === 200) {
          this.lunbotuList = result.data.message;
          Toast('加载成功...');
        } else {
          Toast('加载失败...');
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
  .mint-swipe{
    height: 100px;
    // .mint-swipe-item{
    //   // &:nth-child(1) {
    //   //   background-color: red;
    //   // }
    //   &:nth-child(2) {
    //     background-color: yellow;
    //   }
    //   &:nth-child(3) {
    //     background-color: blue;
    //   }
    // }
  }
  .mui-grid-view,
  .mui-grid-9 {
    background-color: #fff;
    border: none;
    img{
      width: 60px;
      height: 60px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0
  }

</style>
