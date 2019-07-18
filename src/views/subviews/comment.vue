<template>
  <div class='cmt-container'>
    <h3>发表评论</h3>
    <hr>
    <!-- 双向数据绑定 -->
    <textarea placeholder='请输入要评论的内容（最多120字）' maxlength="120"
    v-model="msg"></textarea>
    <mt-button type='primary' size='large' @click='postComment'>发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.id }}
        </div>
        <div class="cmt-body">
          发表内容：{{ item.content }}
        </div>
      </div>
    </div>
    <mt-button type='danger' size='large' plain @click='getMore'>加载更多</mt-button>
  </div>
</template>
<script>
import axios from '@/libs/api.request';
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      // 保存评论数据
      comments: [],
      // 评论输入的内容
      msg: '',
    };
  },
  // 调用
  created() {
    this.$nextTick(() => {
      this.getComments();
    });
  },
  methods: {
    // 获取评论
    getComments() {
      axios.request({
        url: '222802/getComment',
        method: 'get',
        params: {},
      }).then((result) => {
        console.log(result);
        if (result.status === 200) {
          // this.comments = result.data.message;
          // 每当获取新评论数据的时候，不要把老数据清空覆盖。数组拼接
          this.comments = this.comments.concat(result.data.message);
          Toast('获取评论成功...');
        } else {
          Toast('获取评论失败');
        }
      });
    },
    // 加载更多
    getMore() {
      this.getComments();
    },
    // 发表评论
    // postComment() {
    // },
  },
};
</script>
<style lang="scss" scoped>
  .cmt-container{
    h3{
      font-size:18px;
    }
    textarea{
      font-size:14px;
      height: 85px;
      margin: 0;
    }
    .cmt-list{
      margin:5px 0;
      .cmt-item{
        font-size: 13px;
        .cmt-title{
          line-height: 30px;
          background-color: #ccc;
        }
        .cmt-body{
          line-height: 35px;
          // 缩进
          text-indent:2em;
        }
      }
    }
  }
</style>
