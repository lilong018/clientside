import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import system from './system/index'

const store = new Vuex.Store({
  modules: {
    system
  }
})

export default store
