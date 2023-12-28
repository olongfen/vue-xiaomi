<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {Good} from "@/types"

const props = defineProps({
  goods: ref<Good[]>([]),
  show: ref<boolean>(false)
})

const showItemsDetail = ref<boolean>(false)
const handleCloseItemsDetail = () => {
  // eslint-disable-next-line vue/no-mutating-props
  showItemsDetail.value = false
}
const handleShowItemsDetail = () => {
  showItemsDetail.value  = true
}
onMounted(() => {
  const ele = document.querySelector('.items-detail')
  ele.classList.add('active')
})
</script>

<template>
    <div v-show="showItemsDetail || props.show" class="items-detail" @mouseover="handleShowItemsDetail"  @mouseleave="handleCloseItemsDetail" >
      <div v-for="good,idx in props.goods" :key="idx">
        <div class="items-wrap" >
          <i class="item-sp" v-if="idx != 0"></i>
          <a  class="item" href="">
            <img style="width: 160px;height: 110px" :src="good.img" alt=""/>
            <p style="height: 50px">{{good.name}}</p>
            <p class="price">{{good.price}}{{good.unit}}</p>
          </a>
        </div>
      </div>
  </div>

</template>

<style scoped lang="less">
.items-detail{
  display: none;
  position: absolute;
  overflow: hidden;
  width: 100%;
  left: 0;
  opacity: 0;
  top: 140px;
  font-size: 12px;
  z-index: 9989;
  border: 1px solid #c3c3c3;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .items-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    .item-sp {
      width: 1px;
      height: 100px;
      background-color: #c3c3c3;
    }
  };
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      line-height: 40px;
      text-align: center;
    }
    .price {
      margin: -30px;
      color: #fe6700;
    }
  }
}
.items-detail.active{
  display: flex;
  height: 230px;
  box-shadow: 0 3px 4px rgba(0,0,0,.18);
  -webkit-box-shadow: 0 3px 4px rgba(0,0,0,.18);
  transition: box-shadow .2s, height .3s, -webkit-box-shadow .2s;
  opacity: 1;
}
</style>
