<script setup lang="ts">
import GoodsItemDetail from './GoodsItemDetail.vue'
import {  ref, watch } from 'vue'
import type { BaseShow, Good } from '@/types'


const props = defineProps<BaseShow>()

const goodsList = ref<BaseShow>(props)
const category = ref<Array<string>>([])
if (goodsList.value.category) {
  category.value = goodsList.value.category
}
const activeIndex = ref(0)
const goods = ref<Array<Good>>([])
if (goodsList.value.goods) {
  goods.value = goodsList.value.goods[activeIndex.value].list
}


watch(()=> activeIndex.value, (val) => {
  goods.value = goodsList.value.goods[val].list
})
</script>

<template>
  <div class="goods-item">
    <div class="hox-hd">
      <h2 class="title">{{ goodsList.title }}</h2>
      <div class="more">
        <ul class="category" >
          <li  v-for="(item,index) in category" :key="item" @mouseover="activeIndex = index" :class="activeIndex == index ? 'active':''">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <goods-item-detail :goods="goods"
                       :title="goodsList.title"
                       :imgs="goodsList.imgs"
                       :category="category[activeIndex]"/>
  </div>
</template>

<style scoped lang="less">
.more {
  display: flex;
  height: 42px;
  padding: 16px 0 0 ;
  color: #424242;
  .category {
    display: flex;
  }
  li {
    height: 26px;
    margin: 0 0 0  30px;
  }
  li:hover {
    color: #ff6700;
  }
  .active {
    color: #ff6700;
  }

}
</style>
