import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import styles from './styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  store,
  created() {
  	console.log('test');
  	this.$store.dispatch('getContent');
  },
  render: h => h(App)
}).$mount('#app')
