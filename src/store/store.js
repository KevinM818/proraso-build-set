import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	dataFetched: false,
  	activeComponent: 'SelectScent',
    languages: {},
    allScents: [],
    preShaveProducts: [],
    shaveProducts: [],
    afterShaveProducts: [],
    mainProductId: 0,
    activeScents: [],
    selectedPreShave: '',
    selectedShave: '',
    selectedAfterShave: ''
  },
  getters,
  mutations,
  actions
})
