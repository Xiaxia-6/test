<template>
<div class="index-wrap">
  <left-menu></left-menu>
  <index-content></index-content>
</div>
</template>
<script>
  import LeftMenu  from '../components/LeftMenu.vue'
  import IndexContent  from '../components/IndexContent.vue'

  export default {
    components: {
      LeftMenu,IndexContent
    }
  }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
