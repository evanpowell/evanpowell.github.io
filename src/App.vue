<template>
  <div id="app">
    <Nav :active-section="activeSection" />
    <div class="main">
      <section-wrapper
        v-for="section in sections"
        :key="section"
        :title="section"
        v-scroll="handleScroll"
        ><div :is="section"></div>
      </section-wrapper>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import SectionWrapper from './components/SectionWrapper.vue';
import Banner from './components/Banner.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Music from './components/Music.vue';
import Contact from './components/Contact.vue';


const isInViewPort = (el) => {
  const bounding = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const topTakesUpPageMajority = bounding.top >= 0 &&
    bounding.top < viewHeight / 2;
  const bottomTakesUpPageMajority = bounding.bottom <= viewHeight &&
    bounding.bottom > viewHeight / 2;
  return (
    topTakesUpPageMajority || bottomTakesUpPageMajority
  );
};

export default {
  name: 'app',
  components: {
    Nav,
    SectionWrapper,
    Banner,
    About,
    Projects,
    Skills,
    Music,
    Contact,
  },
  data() {
    return {
      activeSection: 'banner',
      sections: [
        'banner',
        'about',
        'projects',
        'skills',
        'music',
        'contact',
      ],
    };
  },
  methods: {
    handleScroll(evt, el) {
      if (isInViewPort(el) && el.id !== this.activeSection) {
        this.activeSection = el.id;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-grey-dark-1;
}

.main {
  padding-left: 20rem;
  background-color: $color-grey-light-1;
}

section {
  min-height: 100vh;
}
</style>
