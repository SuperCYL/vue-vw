<template>
    <div class="img">
        <mt-header title="很长很长很长很长很长很长很长很长很长很长">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
        </mt-header>
        <ul>
            <li v-for="item in list">
                <img v-lazy.container="item">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"recommend",
    data(){
        return{
            list:[
                "http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg",
                "http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg"
            ]
        }
    },
    methods:{
        
    }
}
</script>
<style>
.img ul li{
    margin-top:5px;
}
</style>
