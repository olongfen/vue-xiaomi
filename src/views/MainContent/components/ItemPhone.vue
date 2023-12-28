<script setup lang="ts">
import GoodsItemDetail from '@/views/MainContent/components/GoodsItemDetail.vue'
import { onMounted, ref } from 'vue'

const goodsItem = ref(
  {
    title: '手机',
    imgs: ['https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/414cb0e8ff030c0dacff7531d720955e.png?thumb=1&w=351&h=921&f=webp&q=90'],
    list: [
          {
            name: 'Redmi K70 Pro',
            desc: '第三代骁龙8 年度旗舰平台',
            price: 3299,
            unit: '元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e920ac7e3d197923acbd6388b80cc49.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Redmi K70',
            desc: '第二代骁龙8 旗舰芯',
            price: 2499,
            unit: '元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281411_fc68b941c011a8bbf67db570d0985d7a.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Redmi K70E',
            desc: '新一代旗舰焊门员',
            price: 1999,
            unit: '元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281019_bf131f8cb94d59e370cb84cae6ad5e49.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Xiaomi 14 Pro',
            desc: '徕卡Summilux可变光圈镜头｜小米澎湃OS',
            price: 4999,
            unit: '元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251928_35fb2880108e9aa56fdcf7f894249f26.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Xiaomi 14',
            desc: '徕卡光学Summilux镜头｜小米澎湃OS｜第三代骁龙®8移动平台',
            price: 3999,
            unit: '元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251937_a4ac1ae382a402426beb915f401e50e5.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Redmi Node 13 Pro',
            desc: '小金刚品质',
            price: 1399,
            unit: '元起',
            del:1499,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_9a6a9bf107f4b4a7a25e4ccedf0c1174.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Redmi Node 13 Pro+',
            desc: '天玑 7200-Ultra 处理器',
            price: 1899,
            unit: '元起',
            del: 1999,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200034_b724e1ddef5a0bf5c79c273193b7073c.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
          {
            name: 'Redmi Note 13 5G',
            desc: '1 亿像素 更快更清晰',
            price: 1099,
            del: 1199,
            unit: '元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200032_5beee8420f9734b24d538e68e5c655ac.png?thumb=1&w=300&h=300&f=webp&q=90',
          },
        ],

  })
</script>

<template>
    <!--        手机-->
    <div class="goods-item">
      <div class="hox-hd">
        <h2 class="title">{{goodsItem.title}}</h2>
        <!--            手机商品更多-->
        <div class="more">
          <a href="#" class="more-link">
            查看更多
            <i><el-icon><ArrowRightBold /></el-icon></i>
          </a>
        </div>
      </div>

      <goods-item-detail :goods="goodsItem.list" :title="goodsItem.title" :imgs="goodsItem.imgs" ></goods-item-detail>
    </div>
</template>

<style scoped lang="less">
.more {
  width: 92px;
  height: 58px;
  text-align: center;
  line-height: 58px;
}
.more:hover{
  color: #ff6700;
}
</style>
