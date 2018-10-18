<template>
  <div id="BuildASet" class="BuildASet">
    <div v-if="getLoaded">
      <keep-alive>
          <component :is="activeComponent"></component>       
      </keep-alive>
      <div class="pageBarVue">
        <div class="pageBarMobile--wrap">
          <PageBarMobile></PageBarMobile>
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <div class="loader">Loading...</div>
    </div>
  </div>
</template>

<script>
import SelectScent from './components/SelectScent.vue'
import SelectPreShave from './components/SelectPreShave.vue'
import SelectShave from './components/SelectShave.vue'
import SelectAfterShave from './components/SelectAfterShave.vue'
import Summary from './components/Summary.vue'
import PageBarMobile from './components/PageBarMobile.vue'

export default {
  components: {
    SelectScent,
    SelectPreShave,
    SelectShave,
    SelectAfterShave,
    Summary,
    PageBarMobile
  },
  computed: {
    getLoaded() {
      return this.$store.getters.getLoaded;
    },
    activeComponent() {
      return this.$store.getters.getActiveComponent;
    }
  },
  methods: {
    isAnyPartOfElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      let windowWidth = (window.innerWidth || document.documentElement.clientWidth);
      let vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
      let horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
      return (vertInView && horInView);
    },
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
      );
    },
    pageScroll() {
      let pageBar = document.querySelector('.PageBar');
      let pageBarVue = document.querySelector('.pageBarVue');
      let pageBarMobile = document.querySelector('.pageBarMobile--wrap');
      let scrolledAmount = window.scrollY;
      if (this.isAnyPartOfElementInViewport(pageBarVue) || scrolledAmount + 99 > pageBarVue.offsetTop) {
        pageBarMobile.classList.remove('fixedPageBar');
        pageBarMobile.classList.add('staticPageBar');
      } else if (!this.isAnyPartOfElementInViewport(pageBar)) {
        pageBarMobile.classList.remove('staticPageBar');
        pageBarMobile.classList.add('fixedPageBar');
      } else {
        pageBarMobile.classList.remove('staticPageBar');
        pageBarMobile.classList.remove('fixedPageBar');
      }      
    }
  },
  created() {
    if (window.innerWidth <= 1000) {
      window.addEventListener('scroll', this.pageScroll);
    }
  }
}
</script>