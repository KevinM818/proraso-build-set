<template>
  <div id="BuildASet" v-if="getLoaded">
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import SelectScent from './components/SelectScent.vue'

export default {
  components: {
    SelectScent
  },
  computed: {
    getLoaded() {
      return this.$store.getters.getLoaded;
    },
    activeComponent() {
      return this.$store.getters.getActiveComponent;
    },
    getLang() {
      return this.$store.state.languages;

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
