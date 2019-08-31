<template>
    <div class="my">
        <div style="position:relative;padding:5px">
            <img class="user-img" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="">
            <div style="position:absolute;left:80px;bottom:12px;">
                <p>aeffdsdf3423423</p>
                <p style="color:#FF69B4;font-size:12px;">会员到期时间:2019-10-10</p>
            </div>
            <span style="position:absolute;right:10px;bottom:10px;display:inline-block;background:#FF69B4;padding:5px 8px;color:#fff;border-radius:30px;font-size:14px;">续费VIP</span>
        </div>
        <mt-cell title="防止软件闪退,丢失,打不开,请点此永久保存" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的金币" is-link>
            <span>1000金币</span>
            <span>充值</span>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="福利推荐" class="fl" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="已购尤物" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的收藏" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="用户协议" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="联系客服(客服QQ:2174570452)" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
        <mt-cell title="关于我们" is-link>
            <img slot="icon" src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" width="24" height="24">
        </mt-cell>
    </div>
</template>
<script>
export default {
    name:"my",
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>
<style>
.my{
    margin:40px 0;
}
.my img{
    display: inline;
}
.my .mint-cell-text{
    font-size:12px;
    color:#000;
    font-weight:300!important;
}
.my .mint-cell-value{
    font-size:12px;
    color:#FF69B4;
}
.my .fl .mint-cell-text{
    color:#FF69B4;
}
.my .user-img{
    width:50px;
    height:50px;
    border-radius: 4px;
}
</style>
