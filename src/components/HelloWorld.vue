<template>
  <div class="hello">
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {

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
