<template>
  <div>
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
      circle></v-pagination>
  </div>
</template>
<script>
// 分页信息
export default {
  data() {
    return {
      page: 1
    };
  },
  watch: {
    page: function () {
      this.$emit('page-change', this.page)
    }
  }
};
</script>