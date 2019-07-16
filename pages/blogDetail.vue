<template>
  <v-layout justify-center class="detail-container">
    <v-flex class="card-container">
      <v-card class="card">
        <v-card-title class="headline">{{blogInfo.title}}</v-card-title>
        <v-card-text class="post">
          <span class="post-time">
            <v-icon small>date_range</V-icon>
            发表于{{new Date(blogInfo.date).Format('yyyy-MM-dd')}}
          </span>
          <span class="post-class">
            <v-icon small>folder_open</v-icon>
            分类于
            <a href="/">{{blogInfo.tags}}</a>
          </span>
          <span>
            <v-icon small>visibility</v-icon>
            阅读次数{{blogInfo.clickNum}}
          </span>
        </v-card-text>
        <v-card-text class="content" v-html="markdownHtml"></v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import hljs from 'highlight.js'
let md = require("markdown-it")({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
// let md = new MarkdownIt();

export default {
  data() {
    return {
      blogId: "",
      blogInfo: {},
      markdownHtml: ''
    };
  },
  mounted() {
    this.blogId = this.$route.query.blogId;
    this.getDetail(this.blogId);
  },
  methods: {
    getDetail: function(blogId) {
      this.API.request(
        "/api/blog/detail",
        {
          blogId: blogId
        },
        {
          method: "get"
        }
      ).then(res => {
        if (res.code === 0) {
          this.blogInfo = res.blogInfo;
          this.markdownHtml = md.render(res.blogInfo.content)
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
// code {
//   background-color: transparent!important;
// }
.detail-container {
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
}
.card-container {
  width: 90%;
}
.headline {
  justify-content: center;
}
.post {
  padding-bottom: 8px;
  font-size: 12px;
  text-align: center;
  &-class {
    margin: 0 6px;
    padding: 0 6px;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
}
</style>