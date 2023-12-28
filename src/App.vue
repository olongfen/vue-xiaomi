<script setup lang="ts">
import Layout from '@/views/Layout/index.vue'
import  Menu from '@/views/Menu/index.vue'
import MainContent from '@/views/MainContent/index.vue'
import SiteFooter from '@/views/SiteFooter/index.vue'
import ToolBar from '@/views/ToolBar/index.vue'
</script>

<template>
<div>
  <tool-bar/>
  <header>
    <Layout></Layout>
    <Menu></Menu>
  </header>
  <main>
    <main-content/>
  </main>
  <footer>
    <site-footer/>
  </footer>
</div>
</template>

<style scoped lang="less">

</style>
