<template>
  <v-layout column justify-center align-center class="index-container">
    <v-flex xs12 sm8 md6 class="card-container">
      <v-card class="card" v-for="item in blogList" :key="item.id">
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text class="post">
          <span class="post-time">
            <v-icon small>date_range</V-icon>
            发表于{{new Date(item.date).Format('yyyy-MM-dd')}}
          </span>
          <span class="post-class">
            <v-icon small>folder_open</v-icon>
            分类于
            <a>{{item.tags}}</a>
          </span>
          <span>
            <v-icon small>visibility</v-icon>
            阅读次数{{item.clickNum}}
          </span>
        </v-card-text>
        <v-card-text class="content">{{item.description}}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat nuxt :to="'/blogDetail?blogId=' + item.id">阅读原文 »</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    blogList: Array
  }
}
</script>
<style lang="less" scoped>
.index-container {
  // background: rgba(255, 255, 255, 0.8);
  max-width: 1000px !important;
  margin: 0 auto;
  // border-radius: 8px;
  // padding: 20px 0;
  // min-height: 600px;
}
.v-card {
  box-shadow: none;
}
.card {
  background-color: rgba(255, 255, 255, 0)!important;
  &:not(:last-child) {
    border-bottom: 1px dotted #aaa; 
  }
}
.card:not(:first-child) {
  margin-top: 40px!important;
}
.card-container {
  width: 90%;
}
.post {
  padding-bottom: 8px;
  font-size: 12px;
  &-class {
    margin: 0 6px;
    padding: 0 6px;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
}
.content {
  padding-top: 0;
}
</style>