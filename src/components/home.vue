<template>
  <div class="hi">
    <mt-header title="long long long long title">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <i class="mint-toast-icon mintui mintui-search"></i> 
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name:"hi",
    data(){
      return{
        selected:"外卖"
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        // click后打印出当前mt-tab-item的id
      }
    }
}
</script>
<style>
.hi{
  
}
</style>
