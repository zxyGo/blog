<template>
  <v-layout justify-center class="container">
    <v-flex>
      <span v-for="(item, index) in tags" :key="index" class="tags">
        <v-icon :color="'rgb('+ Math.floor(Math.random(0,1)*255) + ','+ Math.floor(Math.random(0,1)*255) + ',' + Math.floor(Math.random(0,1)*255) + ')'">loyalty</v-icon>
        <span class="tags-name">{{item.tag}}</span>
        <span class="tags-count">{{'(' + item.blogCount + ')'}}</span>
      </span>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      tags: []
    }
  },
  mounted() {
    this.getTags();
  },
  methods: {
    getTags: function() {
      this.API.request(
        "/api/blog/tags",null,
        {
          method: "get"
        }
      ).then(res => {
        if (res.code === 0) {
          this.tags = res.tags;
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    background: rgba(255, 255, 255, 0.8);
    max-width: 1000px !important;
    margin: 0 auto;
    border-radius: 8px;
    padding: 20px 20px;
  }
  .tags {
    display: inline-flex;
    width: 33%;
    padding: 10px;
    cursor: pointer;
    &-name {
      margin-left: 10px;
      color: #444;
    }
    &:hover &-name {
      color: #000;
      font-weight: 700;
    }
    &-count {
      margin-left: 4px;
      color: #aaa;
    }
  }
</style>