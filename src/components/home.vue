<template>
  <div class="home">
    <mt-header :title="tittle" fixed></mt-header>
    <router-view />
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="recommend">
        <div class="icon"><i class="iconfont icon-tuijian"></i></div>
        <div class="name">推荐</div>
      </mt-tab-item>
      <mt-tab-item id="highgoods">
        <div class="icon"><i class="iconfont icon-jingpin-"></i></div>
        <div class="name">精品</div>
      </mt-tab-item>
      <mt-tab-item id="stunnerClub">
        <div class="icon"><i class="iconfont icon-hot"></i></div>
        <div class="name">尤物社</div>
      </mt-tab-item>
      <mt-tab-item id="signing">
        <div class="icon"><i class="iconfont icon-vip"></i></div>
        <div class="name">签约</div>
      </mt-tab-item>
      <mt-tab-item id="my">
        <div class="icon"><i class="iconfont icon-wodedangxuan"></i></div>
        <div class="name">我的</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name:"hi",
    data(){
      return{
        selected:"recommend",
        tittle:"推荐"
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        this.$router.push("/"+val);
        if(val == "recommend"){
          this.tittle = "推荐";
        }else if(val=="highgoods"){
          this.tittle = "精品";
        }else if(val=="stunnerClub"){
          this.tittle = "尤物社";
        }else if(val=="signing"){
          this.tittle = "签约";
        }else{
          this.tittle = "我的";
        }
      }
    }
}
</script>
<style>
.home .icon{
  font-size: 10px;
  padding:5px 0;
}
.home .name{
  font-size:9px;
}
.home .mint-tabbar>.mint-tab-item{
  color:#ABABAB;
}
.home .mint-tabbar>.mint-tab-item.is-selected{
  color:#FF0000;
  background: none;
}
.home .mint-header{
  background: #fff;
  color:#FF0000;
  border-bottom: 1px solid #e2e2e2;
  font-size: 12px;
}
</style>


