<template>
  <div id="BuildASet" class="BuildASet">
    <!-- <header></header> -->
    <div v-if="getLoaded">
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
      <div class="pageBarMobile--wrap">
        <PageBarMobile></PageBarMobile>
      </div>
    </div>
    <div v-else>
      <h1>spinner</h1>
    </div>
   <!--  <footer></footer> -->
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
    pageScroll() {
      let pageBar = document.querySelector('.PageBar');
      let pagescrolled = window.scrollY;
      if (pagescrolled > pageBar.clientHeight + pageBar.offsetTop) {
        console.log('Scrolled past by');        
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