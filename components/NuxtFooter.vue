<template>
  <div>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
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