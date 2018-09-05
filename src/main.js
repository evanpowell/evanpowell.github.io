import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCode, faStar, faMusic, faEnvelope, faGithub } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueScrollTo from 'vue-scrollto';

import Vue from 'vue';
import App from './App.vue';

Vue.use(VueScrollTo);

Vue.use(VueScrollTo, {
  container: '#app',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: false,
  onStart: false,
  onDone: (el) => {
    el.setAttribute('tabindex', '-1');
    el.focus();
  },
  onCancel: false,
  x: false,
  y: true,
});

Vue.directive('scroll', {
  inserted: (el, binding) => {
    const f = (evt) => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

library.add(faUser, faCode, faStar, faMusic, faEnvelope, faGithub, faLinkedinIn);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
