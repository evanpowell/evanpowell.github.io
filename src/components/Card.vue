<template>
  <div class="card">
    <div class="card__side card__side--front">
      Hello
    </div>
    <div class="card__side card__side--back card__side--back-1">
      Goodbye
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      demoUrl: String,
      githubUrl: String,
      imgUrl: String,
    }
  }
</script>

<style scoped lang="scss">
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  width: 30rem;

  &__side {
     
    // FUNCTIONALITY
    height: 52rem;
    width: 100%;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
    
    &--front {
      background-color: $color-white;
      z-index: 2;
    }

    &--back {
      transform: rotateY(-180deg);
      z-index: 1;
      
      &-1 {
        background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(180deg);
    // z-index: 1;
  }

  &:hover &__side--back {
    transform: rotateY(0);
    // z-index: 2;
  }
}
</style>