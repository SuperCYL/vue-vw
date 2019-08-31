<template>
    <div class="highGoods">
        <div class="head">
            <ul class="nav clearfloat">
                <li :class="jpactive" @click="change(1)">精品</li>
                <li :class="flactive" @click="change(2)">分类</li>
            </ul>
        </div>
        <div class="high-swipe">
             <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <div class="imgdiv">
                        <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                        <div class="text">你好</div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="imgdiv">
                        <img src="http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg" alt="">
                        <div class="text">你好</div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="cont">
            <div class="dis">和后轴撒娇啊放假</div>
            <ul class="item-ul clearfloat">
                <li>
                    <img class="big" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566916215028&di=ba2bf688db932cb2bffe6c7a08f89444&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2Ff8%2F87f21148886.jpg" alt="">
                </li>
                <li style="margin-left:4px">
                    <img class="small" src="http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg" alt="">
                    <img class="small m" src="http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg" alt="">
                    <img class="small m" src="http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg" alt="">
                </li>
            </ul>
            <img class="advertising" src="http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
  name: "highGoods",
  data() {
    return {
        jpactive:"active",
        flactive:""
    };
  },
  methods: {
      change(status){
          this.jpactive = "";
          this.flactive = "";
          if(status == 1){
            this.jpactive = "active";
          }else{
            this.flactive = "flactive";
          }
      }
  }
};
</script>
<style>
.highGoods {
  /* margin:40px 0; */
}
.highGoods .high-swipe{
    height:120px;
}
.highGoods .imgdiv{
    position: relative;
    width: 100%;
    height:100%;
}
.highGoods .imgdiv .text{
    position: absolute;
    bottom: 0;
    left:0;
    right:0;
    background: #333;
    opacity: 0.5;
    z-index: 99;
    font-size:12px;
    color:#fff;
    padding:5px 10px;
}
.highGoods .imgdiv img {
  width: 100%;
  height:100%;
  display: block;
}
.highGoods .cont .dis{
    font-size: 12px;
    padding:5px;
    color: #999;
}
.highGoods .cont .item-ul{
    width:100%;
}
.highGoods .cont .item-ul li{
    float: left;
}
.highGoods .cont .item-ul li .big{
    width:216px;
    height:308px;
}
.highGoods .cont .item-ul li .small{
    width:100px;
    height:100px;
    display: block;
}
.highGoods .cont .item-ul li .m{
    margin-top:4px;
}
.highGoods .advertising{
    width: 100%;
    height:100px;
}
.highGoods .head{
    width:100%;
    text-align: center;
}
.highGoods .nav{
    display: inline-block;
    border:1px solid #FF0000;
    margin:10px auto;
    border-radius: 40px;
}
.highGoods .nav li{
    width: 50px;
    line-height: 23px;
    float: left;
    font-size: 12px;
    color: #ABABAB;
    text-align: center;
}
.highGoods .nav .active{
    background: #FF0000;
    color: #fff;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
}
.highGoods .nav .flactive{
    background: #FF0000;
    color: #fff;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
}
</style>
