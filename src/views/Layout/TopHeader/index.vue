<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import ItemsDetail from './components/ItemsDetail.vue'
import type { Good } from '@/types'

const menuList =ref<Array<String>>([
  'Xiaomi手机',
  "Redmi手机",
  "电视",
  "笔记本",
  "平板",
  "家电",
  "路由器",
  "服务中心",
  "社区",
])

const  searchList = ref<Array<String>>([
  '手机换新',
  '洗衣机',
  'Redmi K70 Pro',
  '空调',
  '红米',
  '冰箱',
  '电视',
  '笔记本',
  '平板',
  '路由器',

])

const search  = ref<String>("")

const showItemsDetail = ref<boolean>(false)
const handleShowItemsDetail = (show:boolean) => {
  showItemsDetail.value  =show
}
onMounted(() => {
  // 生成一个随机索引
  var randomIndex = Math.floor(Math.random() * searchList.value.length);
  search.value = searchList.value[randomIndex];
})

const goods = ref<Good[]>([
  {
    name: 'Xiaomi 14 Pro',
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2714d55e6fe4db5e2981f82c5a6b710b.png?thumb=1&w=240&h=165&f=webp&q=90",
    price: 4999,
    unit: '元起',
  },
  {
    name: 'Xiaomi 14',
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/717290eeccdbc60c541c4d98985d3012.png?thumb=1&w=160&h=110&f=webp&q=90",
    price: 3999,
    unit: '元起',
  },
  {
    name: 'Xiaomi MIX Fold 3',
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35f352268526045e077a230802beb588.png?thumb=1&w=160&h=110&f=webp&q=90",
    price: 8999,
    unit: '元起',
  },
  {
    name: 'Xiaomi Civi 3',
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4846501f1e9be04d6d2e859deb0d80e.png?thumb=1&w=160&h=110&f=webp&q=90",
    price: 2299,
    unit: '元起',
  },
  {
    name: 'Xiaomi 12s Pro',
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2874cb04f16cdca6e3f2a542b6bc5e8a.png?thumb=1&w=160&h=110&f=webp&q=90",
    price: 3199,
    unit: '元起',
  },
  {
    name: 'Xiaomi 13 Ultra',
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c130b71f2edfafbc61c38f1325cd60e.png?thumb=1&w=160&h=110&f=webp&q=90",
    price: 5999,
    unit: '元起',
  },
])

</script>

<template>
<div class="top-header">
  <div class="header-logo">
    <a href="//www.mi.com" title="小米官网" class="logo ir">
    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi.com-assets/shop/img/logo-mi2.png" alt=""/>
    </a>
  </div>
  <div class="header-nav" @mouseleave="handleShowItemsDetail(false)">
    <ul class="nav-item-ul">
      <template v-for="(item,index) in menuList" :key="index">
      <li class="nav-item"  >
        <a v-if="index <menuList.length-2" href="" @mouseover="handleShowItemsDetail(true)" >{{item}}</a>
        <a v-else href="" @mouseover="handleShowItemsDetail(false)">{{item}}</a>
      </li>
      </template>
    </ul>
  </div>
  <div class="header-search">
    <el-input
      v-model="search"
      placeholder="Please input"
      class="input-with-select"
      size="large"
    >
      <template #append>
        <el-button class="search" :icon="Search" size="large" />
      </template>
    </el-input>
  </div>
</div>
  <div>
    <items-detail :show="showItemsDetail"  :goods="goods"/>
  </div>
</template>

<style scoped lang="less">
.top-header {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  max-width: 1226px;
  .header-logo{
    width: 100px;
    height: 100px;
    img {
      width: 56px;
      height: 56px;
      margin:22px auto ;
    }
  }
  // 头部菜单
  .header-nav{
    position: relative;
    height: 100px;
    width: 100%;
    line-height: 100px;
    font-size: 16px;
    // 开启flex布局
    .nav-item-ul {
      display: flex;
    }
    .nav-item{
      height: 88px;
      line-height: 88px;
      padding: 10px 0 0 30px;
      a {
        display: block;
      }
    }
    .nav-item:hover {
      color:#FE7660;
    }
  }
  .header-search {
    font-size: 16px;
    width: 300px;
    height: 100px;
    right: auto;
    line-height: 100px;
    .search:hover {
      background-color: #FE7660;
      color: white;
    }
  }
}

</style>
