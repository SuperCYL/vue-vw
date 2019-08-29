<template>
  <div class="home">
    <mt-header title="标题" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
      <router-view />
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="recommend">
        <i class="mint-toast-icon mintui mintui-search"></i> 
        推荐
      </mt-tab-item>
      <mt-tab-item id="highgoods">
        精品
      </mt-tab-item>
      <mt-tab-item id="stunnerClub">
        尤物社
      </mt-tab-item>
      <mt-tab-item id="signing">
        签约
      </mt-tab-item>
      <mt-tab-item id="my">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
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
          this.$router.push("/"+val)
      }
    }
}
</script>

