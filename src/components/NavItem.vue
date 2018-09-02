<template>
  <a href="#" v-scroll-to="link">
    <div :class="[navItem, { 'active': isActive }]">
        <p class="nav__list--link">
          <span>
            <font-awesome-icon :icon="navIcon" fixed-width />
          </span>
          {{ navName }}
        </p>
    </div>
  </a>
</template>

<script>
export default {
  props: [
    'navName',
    'navIcon',
    'activeSection',
  ],
  data() {
    return {
      navItem: 'nav__list--item',
    };
  },
  computed: {
    isActive() {
      return this.navName.toLowerCase() === this.activeSection;
    },
    link() {
      return `#${this.navName.toLowerCase()}`;
    },
  },
};
</script>

<style lang="scss">
.nav__list {

  &--item {
    font-size: 2rem;
    padding: 1.5rem 0 1.5rem 3rem;
    background-image: linear-gradient(270deg, transparent 0%, transparent 50%, $color-primary 50%);
    background-size: 200%;
    background-position: 100%;

    &:hover {
      cursor: pointer;
      background-color: $color-grey-light-2;
      transition: all .2s ease;
      animation: hoverNav .2s ease forwards;
    }
  }

  & span {
    color: $color-primary;
  }
}

.active,
.active:hover {
  animation: activeNav .3s ease-out .35s forwards;

  & span {
    animation: activeSpan .3s ease-out .35s forwards;
  }
}

@keyframes hoverNav {
  0% {
    background-position: 100%;
  }

  50% {
    background-position: 95%;
  }

  100% {
    background-position: 97%;
  }
}

@keyframes activeNav {
  0% {
    background-position: 100%;
  }

  100% {
    background-position: 0%;
    color: $color-white;
  }
}

@keyframes activeSpan {
  0% {
    color: $color-primary;
  }

  100% {
    color: $color-white;
  }
}
</style>
