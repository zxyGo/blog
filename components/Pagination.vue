<template>
  <div>
    <v-pagination
      v-model="page"
      :length="total"
      :total-visible="5"
      circle></v-pagination>
  </div>
</template>
<script>
// 分页信息
export default {
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page: function () {
      this.$emit('page-change', this.page)
    }
  }
};
</script>