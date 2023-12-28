<script setup lang="ts">
import BarBig from './BarBig.vue'
import BarSmall from './BarSmall.vue'
import { ref,onMounted,onUnmounted } from 'vue'

const screenWidth = ref(document.body.clientWidth)
const handleResize = () => {
  screenWidth.value = document.body.clientWidth;
};

// 监听窗口大小变化
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
// 在组件销毁时取消监听
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<template>
<div v-if ="screenWidth > 1488">
  <bar-big/>
</div>
<div v-else>
<bar-small/>
</div>
</template>

<style scoped lang="less">

</style>
