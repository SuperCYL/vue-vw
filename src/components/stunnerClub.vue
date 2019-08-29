<template>
    <div class="stunnerClub">
        <div class="item">
            <div class="item-head">
                <img class="header-img" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                <span class="name">
                    <p style="font-size:14px;font-weight:blod">待岁</p>
                    <p style="font-size:12px;color:#999">姐姐</p>
                </span>
                <span class="money">520&nbsp;金币</span>
            </div>
            <ul class="img-list clearfloat">
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
                <li>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"stunnerClub",
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>
<style>
.stunnerClub{
    margin:40px 0;
}
.stunnerClub .item-head{
    position: relative;
    padding:5px;
}
.stunnerClub .item-head .name{
    position: absolute;
    bottom: 8px;
    left: 60px;
}
.stunnerClub .item-head .money{
    position: absolute;
    right:10px;
    bottom: 8px;
    font-size:12px;
    color:#999;
}
.stunnerClub .header-img{
    width:40px;
    height:40px;
    border-radius: 100%;
}
.stunnerClub .img-list li{
    width:78.5px;
    height:78.5px;
    float: left;
    margin-left: 2px;
    margin-top:2px;
}
.stunnerClub .img-list li:nth-child(1){
    margin-left:0;
}
.stunnerClub .img-list li:nth-child(5){
    margin-left:0;
}
.stunnerClub .img-list li img{
    width:100%;
    height:100%;
}
</style>
