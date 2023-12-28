<script setup lang="ts">

import TopNav from './TopNav/index.vue'
import TopHeader from './TopHeader/index.vue'

</script>

<template>
<div>
  <el-container>
    <el-header class="header">
      <TopNav></TopNav>
      <top-header/>
    </el-header>
  </el-container>
</div>
</template>

<style scoped>

.header {
  position: relative;
  min-width: 1226px;
  width: 100%;
  height: 40px;
  background-color: #333333;
}

</style>
