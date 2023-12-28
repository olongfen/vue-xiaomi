<script setup lang="ts">



const props = defineProps({
  title: String,
  category: String,
  imgs: {
    type: Array<string>,
  },
  goods: {
    type: Object
  }
})

</script>

<template>
  <div class="goods-item-detail">
    <div  v-if="props.imgs.length===1" class="detail-main " >
      <a   href="#">
        <img :src="props.imgs[0]" alt="">
      </a>
    </div>
    <div class="detail-main-double" v-else>
     <a  href="#"> <img  :src="props.imgs[0]" alt=""></a>
     <a  href="#">  <img :src="props.imgs[1]" alt=""></a>

    </div>
<!--     商品左则详情信息-->
    <div class="goods-info">
        <ul>
          <li  v-for="(item,index) in goods" :key="item">
            <a v-if="(index < 7  || props.title==='手机')" class="item-info-base item-info" href="#">
              <img  :src="item.img" alt=""/>
              <h3 class="title">{{item.name}}</h3>
              <p class="desc">{{item.desc}}</p>
              <p class="price">
                <span class="num">{{item.price}}{{item.unit}}</span>
                <del v-if="item.del"><span class="num">{{item.del}}元</span></del>
              </p>
            </a>
            <div v-else class="item-info-base item-info-special">
              <a v-if="item" href="#">
                <div>
                  <h3 class="title">{{item.name}}</h3>
                  <p class="price">{{item.price}}{{item.unit}}</p>
                </div>
                <img  :src="item.img" alt=""/>
              </a>
              <a href="#">
                  <div class="more">
                    浏览更多
                    <small>{{props.category}}</small>
                  </div>
                <svg t="1703667318497" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1262" width="200" height="200"><path d="M717.770105 485.052632l-170.954105-170.900211a26.947368 26.947368 0 0 1 38.157474-38.157474l215.578947 215.578948A26.893474 26.893474 0 0 1 808.421053 512a26.947368 26.947368 0 0 1-13.581474 23.390316l-209.866105 209.92a26.947368 26.947368 0 0 1-38.157474-38.157474L715.075368 538.947368H296.421053a26.947368 26.947368 0 0 1 0-53.894736h421.349052zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z m0-53.894737a458.105263 458.105263 0 1 0 0-916.210526 458.105263 458.105263 0 0 0 0 916.210526z" fill="#FE7660" p-id="1263"></path></svg>
              </a>
            </div>
          </li>
          <div class="item-info-base item-info-special" v-if="goods.length <8">
            <a href="#">
              <div class="more">
                浏览更多
                <small>{{props.category}}</small>
              </div>
              <svg t="1703667318497" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1262" width="200" height="200"><path d="M717.770105 485.052632l-170.954105-170.900211a26.947368 26.947368 0 0 1 38.157474-38.157474l215.578947 215.578948A26.893474 26.893474 0 0 1 808.421053 512a26.947368 26.947368 0 0 1-13.581474 23.390316l-209.866105 209.92a26.947368 26.947368 0 0 1-38.157474-38.157474L715.075368 538.947368H296.421053a26.947368 26.947368 0 0 1 0-53.894736h421.349052zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z m0-53.894737a458.105263 458.105263 0 1 0 0-916.210526 458.105263 458.105263 0 0 0 0 916.210526z" fill="#FE7660" p-id="1263"></path></svg>
            </a>
          </div>
        </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-item-detail{
  display: flex;
  height: 628px;
  // 商品右侧主要图片
  .detail-main{
    width: 234px;
    height: 614px;
    transition: transform 0.5s, box-shadow 0.5s;
  }
  .detail-main:hover{
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
    transform: translateY(-3px) translateZ(50px);
  }
  .detail-main-double{
    width: 234px;
    height: 618px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      transition: transform 0.5s, box-shadow 0.5s;
    }
    a:hover{
      box-shadow: 0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-3px) translateZ(50px);
    }
  }
  // 商品左则详情信息
  .goods-info{
    width: 992px;
    height: 614px;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
    }
    .item-info-base{
      display: block;
      font-size: 14px;
      margin-left: 14px;
      margin-bottom: 14px;
      width: 234px;
      height: 300px;
      background-color: white;
      text-align: center;
      color: #333333;
      padding: 20px 0;
    }
    .item-info{
      transition: transform 0.5s, box-shadow 0.5s;
      // 名称
      .title {
        margin: 0 10px 2px;
        }
      // 描述
        .desc {
          margin:0 10px 10px;
          height: 18px;
          font-size: 12px;
          color:#b0b0b0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      // 价格
      .price{
        color: #FE7660;
        margin: 0 10px 14px;
        del {
          margin-left: 0.5em;
          color: #b0b0b0;
          text-decoration: line-through;
        }
      }
        img {
          width: 160px;
          height: 160px;
        }
    }
    .item-info:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
      transform: translateY(-3px) translateZ(50px);
    }
  //  特殊商品
  .item-info-special{

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    align-items: center;
    padding: 0;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 234px;
      height: 143px;
      background-color: #FFFFFF;
      transition: transform 0.5s, box-shadow 0.5s;
      .title {
        width: 94px;
        height: 42px;
      }
      .price {
        color: #FE7660;
      }
      .icon {
        width: 48px;
        height: 48.67px;
      }
      .more {
        width: 94px;
        height: 45px;
        text-align: left;
        font-size: 18px;
        line-height:  45px;
        small {
          height: 18px;
          margin-top: -20px;
          display: block;
          font-size: 12px;
          color: #757575;
        }
      }
    }
    a:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
      transform: translateY(-3px) translateZ(50px);
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  }
}
</style>
