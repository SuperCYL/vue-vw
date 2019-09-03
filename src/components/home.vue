<template>
  <div class="home">
    <mt-header v-show="isShow" :title="tittle" fixed></mt-header>
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
import { jiemi } from "@/filters"
export default {
  name:"hi",
    data(){
      return{
        isShow:true,
        selected:"recommend",
        tittle:"推荐"
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        this.isShow = true;
        this.$router.push("/"+val);
        if(val == "recommend"){
          this.tittle = "推荐";
        }else if(val=="highgoods"){
          this.isShow = false;
          this.tittle = "精品";
        }else if(val=="stunnerClub"){
          this.tittle = "尤物社(需打赏)";
        }else if(val=="signing"){
          this.tittle = "签约";
        }else{
          this.tittle = "我的";
        }
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        let jm = "WxUkr396J7WPCYSVX7vyPK4FTxhkswgWRAVRCUTgeU4IKeHmdvycl0RB4wEqNC727PE8U/8FBUuqVXZNYQAtcrNkxXMlLKwooM1eQjmstHBVYmvVkSCmgc71Tl/gWcnQeYa+GkwCj1RoNpoYCgp6XSWQR+17AKRcTMelvBbqqIIxANBDxdKlyOuLSTwkZxELvcKR3e3zgiyiNtEEUMysqYbQHawZIqPeOw+44TnH6py/tQ6rdDzLvr3w8/fk18WHHnXw36hf6ITJSqk83ZlAEcvdsK/MphQeo46xHhPvJz3r523pEoRbgdyIJccf3Mo/6KprptCK7MQHi9Yh34cj+7fIfdqwEr3DFrmqEXBKegbJbOLvfbaiD+x8rxsmurXs8PBS60Pb+Z6tsIYW/BiB2lHV2hrwibs9ELkWqQwKJsCp89TB+JxltmKV5ADK0uXIfdsMaxy4wrMyrlHzcia/+1vXElf+2+tLVFVklQVI7h1ZHwTn4W0P/3a9QNMd5QvX/ONZf5yFsHNNvVVhW6UqXheTK+yReO8HoUo/GrknULAyXZO72gROsuEKaRhtof8jJBgF4c1deoGq3XBb7jsxk+OEce4I3N/Ao8OPdMyKvVj3uQ60zDnRvcmGwLZKu3Gw3lQeQ34y+GbEcbGFmUxFbbCiGIDmrXberdN3isnDozM="
        let jml = jiemi(jm);
        console.log(jml);
        // this.$axios.get('/upload/data/pingdao.json').then(res=>{
        //   console.log(res);
        // }).catch(error=>{
        //   console.log(error);
        // })
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
</style>


