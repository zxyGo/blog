<template>
  <div>
    <v-footer :fixed="fixed" app>
      <div class="footerInfo">皖ICP备17029723号 &copy; 2019</div>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'NuxtFooter',
  data() {
    return {
      fixed: false
    }
  }
}
</script>
<style lang="less" scoped>
  .footerInfo {
    text-align: center;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
  }
</style>