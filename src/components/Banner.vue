<template>
  <div class="banner">
    <img class="banner--img" src="../assets/images/banner.jpg" alt="Banner" >
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
  .banner {
    height: 100vh;
    overflow: hidden;
    position: relative;

    &--img {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>