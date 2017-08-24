<template>
  <div class="index-wrap">
    <left-menu></left-menu>
    <index-content></index-content>
  </div>
</template>
<script>
  import LeftMenu  from './LeftMenu.vue'
  import IndexContent  from './IndexContent.vue'

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
