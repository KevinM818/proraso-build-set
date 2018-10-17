<template>
  <div id="BuildASet" class="BuildASet">
    <div v-if="getLoaded">
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
    </div>
    <div v-else>
      <h1>spinner</h1>
    </div>
  </div>
</template>

<script>
import SelectScent from './components/SelectScent.vue'
import SelectPreShave from './components/SelectPreShave.vue'
import SelectShave from './components/SelectShave.vue'
import SelectAfterShave from './components/SelectAfterShave.vue'
import Summary from './components/Summary.vue'

export default {
  components: {
    SelectScent,
    SelectPreShave,
    SelectShave,
    SelectAfterShave,
    Summary
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
      let pageBarOffset = document.querySelector('.PageBar').offsetTop;
      let pagescrolled = window.scrollY;
      console.log(pageBarOffset, pagescrolled);
    }
  },
  created() {
    window.addEventListener('scroll', this.pageScroll);
  }
}
</script>