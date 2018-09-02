<template>
  <div id="app">
    <Nav :active-section="activeSection" />
    <div class="main">
      <section id="banner" v-scroll="handleScroll">
        <Banner />
      </section>
      <section id="about" v-scroll="handleScroll">
        About
      </section>
      <section id="projects" v-scroll="handleScroll">
        Projects
      </section>
      <section id="skills" v-scroll="handleScroll">
        Skills
      </section>
      <section id="music" v-scroll="handleScroll">
        Music
      </section>
      <section id="contact" v-scroll="handleScroll">
        Contact
      </section>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';

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
    Banner,
  },
  data() {
    return {
      activeSection: 'banner',
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
  color: #2c3e50;
}

section {
  height: 100vh;
}

#about {
  background-color: aqua;
}

#projects {
  background-color: beige;
}

.main {
  padding-left:20rem;
}

</style>
