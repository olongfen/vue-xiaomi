<script setup lang="ts">
import { ref } from 'vue'

const itemList =ref<Array<String>>(['小米官网','小米商城',
  '小米澎湃OS',"LoT","云服务","天星数据","有品","小爱开放平台",
  "资质证照","协议规则","下载ap","Select Region",
])

</script>

<template>
<div class="top-nav">
<!--  左边菜单-->
  <div class="top-nav-item">
  <a class="menu-a" href="" v-for="item,index in itemList" key="item">
    {{item}}
    <span class="sep" v-if ="index!=itemList.length-1">|</span>
  </a>
  </div>
<!--    用户信息-->
  <div class="userinfo">
        <a style="padding: 0 5px" class="menu-a" href="#">登录</a>
        <span class="sep">|</span>
        <a style="padding: 0 5px" class="menu-a" href="#">注册</a>
        <span class="sep">|</span>
        <a style="margin-right: 26px" class="menu-a" href="#">消息通知</a>
    <!-- 购物车 -->
        <div class="shopping-cart">
          <a class="cart-a" href="#">
            <el-icon class="shopping-cart-icon"><ShoppingCart  /></el-icon>
            购物车（0）
          </a>
          <div class="cart-detail">
            购物车中还没有商品，赶紧选购吧！
          </div>
        </div>
  </div>
</div>
</template>

<style scoped lang="less">
.top-nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #b0b0b0;
  .menu-a {
    height: 40px;
    line-height: 40px;
  }
  .menu-a:hover {
    color: #fff;
  }
  // 菜单布局
  .top-nav-item {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
  }
  .sep{
    color: #424242;
    margin: 0 3.6px;
  }
  // 用户信息布局
  .userinfo{
    display: flex;
    height: 40px;
    align-items: center;
  }
  .shopping-cart{
    position: relative;
    flex-grow: 0;
    text-align: center;
    line-height: 40px;
    background-color: #424242;
    .cart-a {
      width: 120px;
      height: 40px;
      margin-left: 26px;
    }
    //图标样式
    .shopping-cart-icon{
     width: 20px;
      height: 20px;
      font-size: 20px;
      line-height: 20px;
      vertical-align: -4px;
      margin-right: 5px;
    }
  //   购物车详情
    .cart-detail{
      position: absolute;
      color: #333333;
      z-index: 999;
      right: 0;
      transition: width 0.8s;
      display: none;
      width: 300px;
      height: 100px;
      line-height: 100px;
      box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.5);
    }
  }
  .shopping-cart:hover{
    background-color: white;
    color: #FE7660;
    .cart-detail{
      background-color: #FFFFFF;
      display: block;
    }
  }
}

</style>
