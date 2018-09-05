<template>
  <section :id="title">
    <div v-if="title !== 'banner'" class="section-header">
      <h2 class="section-header__text">
        {{ title }}
      </h2>
    </div>
    <slot v-else></slot>
    <div v-if="title !== 'banner'" class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
.section-header {
  background-color: $color-primary;
  height: 10rem;
  position: relative;

  &__text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 5%;
    color: $color-white;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: .2rem;
    font-size: 3.5rem;
  }
}

.container {
  width: 80%;
  margin: 0 auto;
  padding: 7rem 0;
}
</style>
