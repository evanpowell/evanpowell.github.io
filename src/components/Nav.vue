<template>
  <div class="nav">
    <a href="#" v-scroll-to="'#banner'">
      <div class="nav__logo">
        <div class="nav__title">
          <h1 class="nav__title--main">Evan Powell</h1>
          <p class="nav__title--sub">Full Stack Developer</p>
        </div>
      </div>
    </a>
    <ul class="nav__list">
      <NavItem
        v-for="navItem in navItems"
        :key="navItem.name"
        :nav-name="navItem.name"
        :nav-icon="navItem.icon"
        :active-section="activeSection"
      />
    </ul>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
  name: 'Nav',
  components: {
    NavItem,
  },
  props: {
    activeSection: String,
  },
  data() {
    return {
      navItems: [
        {
          name: 'About',
          icon: 'user',
        },
        {
          name: 'Projects',
          icon: 'code',
        },
        {
          name: 'Skills',
          icon: 'star',
        },
        {
          name: 'Music',
          icon: 'music',
        },
        {
          name: 'Contact',
          icon: 'envelope',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav {
    min-width: 20rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $color-white;
    box-shadow: 2px 0 6px rgba($color-black, .2);
    z-index: 99;

    &__logo {
      width: 100%;
      height: 17rem;
      position: relative;
      background-color: $color-grey-light-1;
      border-bottom: 1px solid $color-grey-light-2;
      transition: background-color .2s;

      &:hover {
        cursor: pointer;
        background-color: $color-grey-light-2;
      }
    }

    &__title {
      @include absoluteCenter;
      min-width: 14rem;

      &--main {
        color: $color-primary;
        font-weight: 200;
        font-size: 3.7rem;
        line-height: 3.4rem;
        letter-spacing: 2px;
        margin-left: -2px;
        padding-bottom: 5px;
      }

      &--sub {
        font-size: 1.5rem;
      }
    }
  }
</style>
