<template>
  <div class="search">
    <v-text-field label="搜索内容哦~" class="search-input" v-model="searchContent" @keyup.enter="search">
      <v-icon slot="append" @click="search">search</v-icon>
    </v-text-field>
    <search-page v-if="searchList.length !== 0" :blogList="searchList"></search-page>
    <!-- 未搜索到内容 -->
    <div class="search-not" v-if="searchList.length === 0 && searchContent !== ''">
      未搜索到相关博客  ^_-
    </div>
  </div>
</template>
<script>
/**
 * 搜索页
 */

import SearchPage from '../components/listComponent'
export default {
  data() {
    return {
      searchList: [],
      searchContent: ''
    }
  },
  methods: {
    search() {
      console.log(this.searchContent);
      if (this.searchContent == '') return;
      this.API.request(
        '/api/blog/search',
        {
          keyword: this.searchContent
        },
        {
          method: 'get'
        }
      ).then( res=> {
        if (res.code === 0) {
          this.searchList = res.list;
        }
      })
    }
  },
  components: {
    SearchPage
  }
}
</script>
<style lang="less" scoped>
  .search {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    max-width: 1000px !important;
    margin: 0 auto;
    min-height: 600px;
    padding: 20px 0;
    &-input {
      width: 80%;
      margin: 0 auto;
    }
    &-not {
      display: flex;
      font-size: 18px;
      color: #aaa;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      justify-content: center;
      height: 500px;
      align-items: center;
    }
  }
</style>