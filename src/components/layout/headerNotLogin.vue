<template>
  <div class="app-header__login not-login">
    <div class="row">
      <router-link to="/login">
        <b-button variant="primary" class="mr-2 btn-md-small">登录</b-button>
      </router-link>
      <router-link to="/register">
        <b-button variant="outline-secondary" class="btn-md-small">注册</b-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'header-not-login',
  methods: {
    ...mapActions(['system/setLoginFlag']),
  },
  computed: {
    ...mapState(['system/adminMenuFlag']),
  },
}
</script>