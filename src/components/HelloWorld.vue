<template>
  <div class="hello">
    <mt-header title="多个按钮">
  <div slot="left">
    <mt-button v-link="'/'" icon="back">返回</mt-button>
    <mt-button @click="handleClose">关闭</mt-button>
  </div>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <ul class="cont clearfloat">
      <li>
        <img src="../assets/1.jpg" alt="">
      </li>
      <li>
        <img src="../assets/2.jpg" alt="">
      </li>
      <li>
        <img src="../assets/3.jpg" alt="">
      </li>
      <li>
        <img src="../assets/4.jpg" alt="">
      </li>
    </ul>
    <div class="swing animated">hi,everybody</div>

    <!-- <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul> -->
    <div style="height:200px;">
      <mt-swipe :auto="1500">
        <mt-swipe-item><img src="../assets/1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/4.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$axios.get('/upload/common/alphaConfig.action')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
}
</script>

<style scoped>
.cont li {
  float: left;
  width: 103.5px;
  height: 140px;
}
.cont li img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.swing {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

@keyframes slideOutUp {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
