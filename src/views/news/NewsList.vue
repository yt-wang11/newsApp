<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for='item in newsList' :key='item.id'>
          <!-- 注意此处传id问题 -->
          <router-link :to="'/home/newsinfo/'+ item.id">
            <img class="mui-media-object mui-pull-left" :src='item.img_url'>
            <div class="mui-media-body">
              <h1>{{item.title}}</h1>
              <p class='mui-ellipsis'>
                <span>发表时间:{{item.add_time}}</span>
                <span>点击:{{item.click}}次</span>
              </p>
            </div>
          </router-link>
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
      // 保存新闻列表
      newsList: [],
    };
  },
  created() {
    this.$nextTick(() => {
      this.getNewsList();
    });
  },
  methods: {
    getNewsList() {
      axios.request({
        url: '222802/newsList',
        method: 'get',
        params: {},
      }).then((result) => {
        console.log(result);
        if (result.status === 200) {
          this.newsList = result.data.message;
        } else {
          Toast('获取新闻列表失败');
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .mui-media-body{
    h1{font-size:14px;}
    .mui-ellipsis{
      font-size:12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
};
</style>
