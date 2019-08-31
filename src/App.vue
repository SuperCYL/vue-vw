<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
ul>li{
  list-style: none;
}
/*清除浮动代码*/
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clearfloat{zoom:1}
img{
  display: block;
  object-fit: cover;
}
.mint-header{
  background: #fff;
  color:#FF0000;
  border-bottom: 1px solid #e2e2e2;
  font-size: 12px;
}
</style>
