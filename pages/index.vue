<template>
  <v-layout column justify-center align-center class="index-container">
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"></div>
      <v-card v-for="item in blogList" :key="item.id">
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text>{{item.description}}</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" flat nuxt to="/inspire">阅读原文</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <pagination ref="page" @page-change="getList"></pagination>
  </v-layout>
</template>

<script>
// 主页
import Pagination from '../components/Pagination'

export default {
  data() {
    return {
      blogList: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList: function() {
      console.log("start");
      this.API.request(
        "/api/blog/list",
        {
          pageNum: this.$refs.page.page,
          itemNum: 10
        },
        {
          method: "get"
        }
      ).then(res => {
        console.log(res);
        if (res.list) {
          this.blogList = res.list;
        }
      });
    }
  },
  components: {
    Pagination
  }
};
</script>
<style lang="less" scoped>
.index-container {
  background: rgba(255, 255, 255, 0.8);
  max-width: 1000px !important;
  margin: 0 auto;
  border-radius: 8px;
}
.v-card {
  box-shadow: none;
}
</style>