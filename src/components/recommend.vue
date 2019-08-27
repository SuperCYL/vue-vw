<template>
    <div class="recommend">
        <mt-loadmore :top-method="loadTop" ref="loadmore">
            <ul>
                <li>
                    <div>hi</div>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" />
                </li>
                <li>
                    <div>hi</div>
                    <img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" />
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>
export default {
    name:"recommend",
    data(){
        return{

        }
    },
    methods:{
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        }
    }
}
</script>
<style>
.recommend img{
    width:100%;
    display: block;
}
.recommend ul li div{
    padding:5px;
    color:#999;
}
</style>
