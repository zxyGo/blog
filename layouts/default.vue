<template>
  <v-app>
    <nav-header></nav-header>
    <v-content class="overall-style">
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <nuxt-footer></nuxt-footer>
  </v-app>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NuxtFooter from '../components/NuxtFooter'

export default {
  data() {
    return {
      // clipped: false,
      // drawer: false,
      // fixed: false,
      // items: [
      //   {
      //     icon: "border_color",
      //     title: "随笔"
      //   },
      //   {
      //     icon: "list_alt",
      //     title: "CODE"
      //   },
      //   {
      //     icon: "person",
      //     title: "关于"
      //   },
      //   {
      //     icon: "search",
      //     title: "搜索"
      //   }
      // ],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      // title: "Vuetify.js"
    };
  },
  components: {
    NavHeader,
    NuxtFooter
  }
};
</script>
<style lang="less" scope>
.v-btn {
  padding: 4px 16px !important;
}
.v-toolbar__content,
.v-toolbar__extension {
  max-width: 1000px;
  margin: 0 auto;
}
@media screen and (min-width: 960px) {
  .overall-style {
    background-image: url("https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/blog/blogBg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
  }
  .theme--light.v-toolbar {
    background-color: rgba(255, 255, 255, 0.6) !important;
  }
}
</style>