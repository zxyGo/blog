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
    <div v-show="blogList.length !== 0">
      <pagination ref="page" @page-change="getList" :total="totalCount"></pagination>
    </div>
    <v-btn color="error" hidden-sm-and-down fixed fab dark class="goTop" @click="goTop" v-show="goTopShow">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
    <!-- <v-btn color="error" fixed fab dark class="goTop">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn> -->
  </v-layout>
</template>

<script>
// 主页
import Pagination from '../components/Pagination'
// import dateUtil from '../utils/date'

export default {
  props: {
    tag: String
  },
  data() {
    return {
      blogList: [],
      totalCount: 0,
      goTopShow: false
    }
  },
  mounted() {
    if (this.tag) {
      this.getTagList(this.tag)
    } else {
      this.getList();
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getList() {
      this.API.request(
        "/api/blog/list",
        {
          pageSize: this.$refs.page.page,
          itemSize: 10
        },
        {
          method: "get"
        }
      ).then(res => {
        if (res.code === 0) {
          this.blogList = res.list;
          this.totalCount = Math.ceil(res.count/10)
        }
      });
    },
    getTagList(tag) {
      this.API.request(
        "/api/blog/tagOne",
        {
          pageSize: this.$refs.page.page,
          itemSize: 10,
          tag: tag
        },
        {
          method: "get"
        }
      ).then(res => {
        if (res.code === 0) {
          this.blogList = res.list;
          this.totalCount = Math.ceil(res.count/10)
        }
      });
    },
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 500) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
      console.log(scrollTop)
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
  padding: 20px 0;
  min-height: 600px;
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
.goTop {
  right: 2%;
  bottom: 5%;
}
</style>