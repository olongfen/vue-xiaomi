<script setup lang="ts">
import ItemPhone from './components/ItemPhone.vue'
import ItemBaseShow from './components/ItemBaseShow.vue'
import { onMounted, ref } from 'vue'
import {smartWear,laptop,homeAppliances,lifeElectronics,
  kitchenElectronics,smartHome,sportTravel} from '@/data'
import type { BaseShow } from '@/types'

const smartWearData =ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})
const laptopData =ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})
const homeAppliancesData = ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})
const lifeElectronicsData =ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})
const kitchenElectronicsData = ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})
const smartHomeData = ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})
const sportTravelData = ref<BaseShow>({
  title: '',
  category: [],
  goods: [],
  imgs: [],
})

smartWearData.value= smartWear
laptopData.value= laptop
homeAppliancesData.value= homeAppliances
lifeElectronicsData.value= lifeElectronics
kitchenElectronicsData.value= kitchenElectronics
smartHomeData.value= smartHome
sportTravelData.value= sportTravel
</script>

<template>
  <div class="home-main" >
    <div class="home-main-container">
<!--  上面商品图片    -->
      <div class="home-main-banner">
        <img  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2011078db9b3708d3caae52df7be3cc.png?thumb=1&w=1226&h=120&f=webp&q=90" alt="">
      </div>
<!--      商品列表信息-->
<!--手机-->
      <item-phone/>
      <item-base-show :title="smartWear.title" :imgs="smartWear.imgs" :goods="smartWear.goods" :category="smartWear.category"/>
      <item-base-show :title="laptopData.title" :imgs="laptopData.imgs" :goods="laptopData.goods" :category="laptopData.category"/>
      <item-base-show :title="homeAppliancesData.title" :imgs="homeAppliancesData.imgs" :goods="homeAppliancesData.goods" :category="homeAppliancesData.category"/>
      <item-base-show :title="lifeElectronicsData.title" :imgs="lifeElectronicsData.imgs" :goods="lifeElectronicsData.goods" :category="lifeElectronicsData.category"/>
      <item-base-show :title="kitchenElectronicsData.title" :imgs="kitchenElectronicsData.imgs" :goods="kitchenElectronicsData.goods" :category="kitchenElectronicsData.category"/>
      <item-base-show :title="smartHomeData.title" :imgs="smartHomeData.imgs" :goods="smartHomeData.goods" :category="smartHomeData.category"/>
      <item-base-show :title="sportTravelData.title" :imgs="sportTravelData.imgs" :goods="sportTravelData.goods" :category="sportTravelData.category"/>
      <div class="home-main-banner">
        <a href="javascript:;">
          <img width="1226px" height="120px" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1839&h=180&f=webp&q=90" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-main {
  height: 5888px;
  background-color: #f5f5f5;
  min-width: 1226px;
  padding: 4px 0 12px;
  // 容器内容
  .home-main-container {
    max-width: 1226px;
    height: 5872px;
    margin: 0   auto;
    // 商品图片
    .home-main-banner{
      width: 1226px;
      height: 120px;
      margin: 22px 0;
  }
}
}


</style>
