<script setup lang="ts">
import {CategoryGood} from '@/types'
import { ref } from 'vue'
const carouselList =ref<Array<String>>([
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/60fce15f8340a3d998e6297bf1c7a057.jpg?w=2452&h=920',
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d9c2f8205e85cf57678b00380cd974.png?thumb=1&w=1226&h=460&f=webp&q=90',
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aea40518d62a25a59c5402f2e62c2333.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72d2f359aa032bc5f6372b3022b39a92.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
])

//  分类列表
const categoryList = ref<Array<String>>([
  '手机',
  '电视',
  '家电',
  '笔记本 平板',
  '出行 穿戴',
  '耳机 音箱',
  '健康 儿童',
  '生活 箱包',
  '智能 路由器',
  '电源 配件',
])

const categoryItemGoods = ref<Array<CategoryGood>>(
  [
    {name: 'Xiaomi MIX系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c57d3a5e8a2fde79bcffce9d5344c80.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi 数字系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d989ce63c679d0e9e8cf64397cef588a.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi Civi系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi K系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faec0354fdd95311ed8ae9a5e4e4df0e.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi Note系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi 数字系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi MIX系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c57d3a5e8a2fde79bcffce9d5344c80.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi 数字系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d989ce63c679d0e9e8cf64397cef588a.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi Civi系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi K系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faec0354fdd95311ed8ae9a5e4e4df0e.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi Note系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi 数字系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi MIX系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c57d3a5e8a2fde79bcffce9d5344c80.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi 数字系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d989ce63c679d0e9e8cf64397cef588a.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Xiaomi Civi系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ed8c4ca59357db902916b5b9dfb8016.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi K系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faec0354fdd95311ed8ae9a5e4e4df0e.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi Note系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a6dfdc51ff25583042e86d9ae2697b3.png?thumb=1&w=40&h=40&f=webp&q=90' },
    {name: 'Redmi 数字系列',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=40&h=40&f=webp&q=90' },
  ],
)

const toolsList = ref([
  {name: '保障服务',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48'},
  {name: '企业团购',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48'},
  {name: 'F码通道',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48'},
  {name: '米粉卡',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48'},
  {name: '以旧换新',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48'},
  {name: '话费充值',img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48'},
])

const randomCategoryItemGoods = () => {
  return Math.floor(Math.random() * categoryList.value.length)
}

const handleCategoryHover = (flag,isline) => {
  const categoryUl = document.querySelector('.category-line-ul')
  if (flag) {
    categoryUl.style.display = 'flex'
  }else {
    if (isline) {
      categoryUl.style.display = 'flex'
    }else {
      categoryUl.style.display = 'none'
    }

  }
}

</script>

<template>
<div class="home-container">
<!--  首页内容  -->
  <div class="home-content">
    <div class="home-category">
      <ul class="category-ul" >
        <li class="category-li" v-for="item,index in categoryList" :key="index" @mouseover="handleCategoryHover(true)" @mouseleave="handleCategoryHover(false)">
            <span>{{item}}</span>
            <el-icon class="category-icon"><ArrowRightBold /></el-icon>
        </li>
      </ul>
    </div>
    <div class="home-carousel" >
      <el-carousel height="auto" autoplay >
        <el-carousel-item class="home-carousel-item"  v-for="item,index in carouselList" :key="index">
          <a  href="#"><img class="carousel-img"  :src="item" alt=""></a>
        </el-carousel-item>
      </el-carousel>

        <ul class="category-line-ul" @mouseover="handleCategoryHover(true)" @mouseleave="handleCategoryHover(false)">
          <li class="category-line-li" v-for="item,index in categoryItemGoods" :key="index">
            <a class="category-line-a" href="#">
              <img class="category-line-img" :src="item.img" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
    </div>
  </div>
<!--  底部-->
  <div class="home-footer">
    <div class="home-footer-tools">
      <ul class="footer-tools-ul">
        <li class="footer-tools-li" v-for="item,index in toolsList" :key="index">
          <a class="footer-tools-item" href="#">
            <img :src="item.img" alt="">
            <i>{{item.name}}</i>
          </a>
        </li>
      </ul>
    </div>
    <div class="home-footer-item">
      <a href="#">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b67117bc92924fb2ff0e7ad2be86084.png?w=632&h=340" alt="">
      </a>

    </div>
    <div class="home-footer-item">
      <a href="#">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8dede2520f8dfff9c9b690af498cafe8.jpg?w=632&h=340" alt="">
      </a>
    </div>
    <div class="home-footer-item">
      <a href="#">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ac77590368ff636d0b4f6a988133f55.png?w=632&h=340" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
  .home-container{
    position: relative;
    height: 670px;
    width: 100%;
    font-size: 14px;
    margin-top: 100px;
  }
// 内容
  .home-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 460px;
  }
  // 菜单
  .home-category{
    width: 234px;
    height: 460px;
    z-index: 1;
    color: #ffffff;
    background: #3E3D3D;
    .category-ul{
      width: 234px;
      height: 460px;
      padding: 20px 0;
      .category-li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        line-height: 42px;
        padding: 0 0 0 30px ;
        .category-icon{
          right: 30px;
        }
      }
      .category-li:hover{
        background: #FF6700;
      }

    }
  }
  // 菜单具体商品分类
  .category-line-ul{
    position: relative;
    height: 460px;
    display: none;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    top: -460px;
    right: auto;
    background-color: #ffffff;
    .category-line-li{
     display: flex;
      font-size: 14px;
     align-items: center;
      margin: 25px 0 0 30px;
     padding-left: 30px;
      .category-line-a{
        display: flex;
        height: 42px;
        line-height: 42px;
        align-items: center;
        .category-line-img{
          margin-right: 10px;
        }

      }
    }
    .category-line-li:hover{
      color: #FE7660;
    }
  }
  .home-carousel{
    width: 992px;
    height: 460px;
  }
// 轮播图
  .home-carousel-item{
    height: 460px;
    .carousel-img{
      width: 992px;
      height: 460px;
    }
  }

  // 底部
  .home-footer{
    display: flex;
    justify-content: space-between;
    height: 170px;
    max-width: 1226px;
    width: 100%;
    margin: 10px auto 20px;
    .home-footer-tools{
      width: 234px;
      padding: 3px;
      background-color: #5f5750;
      .footer-tools-ul{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        .footer-tools-li{
          height: 82px;
          width: 76px;
          padding: 0 3px;
          border: 1px solid #665e57;
          .footer-tools-item{
            height: 70px;
            width: 64px;
            padding: 18px 0 0 ;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            img{
              margin: 0 23px 4px;
              height: 24px;
              width: 24px;
            }
          }
          .footer-tools-item:hover{
            color: #FFFFFF;
          }
        }
      }


    }
    .home-footer-item{
      width: 316px;
      background-color: #333333;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
