<template>
  <div id="app">
    <Header />
    <div class="d-flex app-router">
      <Admin-menu v-if="adminMenuFlag" />
      <router-view name="app" to="/admin" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/header'
import AdminMenu from './components/layout/adminMenu'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    AdminMenu,
  },
  computed: {
    ...mapState({
      adminMenuFlag: (state) => state.system.adminMenuFlag,
    }),
  },
}
</script>

<style lang="scss">
html,
body,
#app {
  padding: 0;
  margin: 0 !important;
  min-height: 100% !important;
  height: 100%;
  overflow-x: none;
}
</style>
