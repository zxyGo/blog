<template>
  <div>
    <v-toolbar :clipped-left="clipped" fixed app class="customized-width">
      <v-toolbar-title @click="goRouter('/')"><img src="../static/blog-logo.png" alt=""></v-toolbar-title>
      <v-spacer/>
      <v-layout justify-end>
        <v-flex hidden-sm-and-down>
          <v-toolbar-items class="justify-end">
            <v-btn flat v-for="item in items" :key="item.title" :to="item.link">
              <v-icon small left>{{item.icon}}</v-icon>
              {{item.title}}
            </v-btn>
          </v-toolbar-items>
        </v-flex>
        <v-flex hidden-md-and-up>
          <v-toolbar-items class="justify-end">
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
              <v-icon>menu</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-flex hidden-md-and-up>
      <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" @click.stop="goPage(item.link)">
            <v-list-tile-action>
              <v-icon light>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "border_color",
          title: "随笔",
          link: '/life'
        },
        {
          icon: "widgets",
          title: "分类",
          link: '/classify'
        },
        // {
        //   icon: "list_alt",
        //   title: "CODE",
        //   link: '/'
        // },
        {
          icon: "person",
          title: "关于",
          link: '/about'
        },
        {
          icon: "search",
          title: "搜索",
          link: '/search'
        }
      ],
      rightDrawer: false,
      clipped: false,
    }
  },
  methods: {
    goRouter(routeLink) {
      this.$router.push(routeLink);
    },
    goPage(routeLink) {
      this.rightDrawer = false;
      this.$router.push(routeLink);
    }
  }
}
</script>