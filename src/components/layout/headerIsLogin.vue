<template>
  <div class="app-header__login is-login">
    <div class="d-inline-block mr-4">
      <!--icon 會員-->
      <i class="fas fa-user icon-header-person inline-block mr-1"></i>
      <span class="text-white inline-block">{{displayName}}</span>
    </div>
    <div class="d-inline-block position-relative mr-4">
      <!--icon 信封-->
      <font-awesome-icon :icon="['far', 'envelope']" size="lg" class="text-primary mr-2" />
      <!--數量-->
      <b-badge variant="primary" class="rounded-circle">2</b-badge>
    </div>
    <div class="d-inline-block mr-4">
      <router-link to="/welcome">
        <b-button class="btn-md-small" @click="setLoginFlag(false)">登出</b-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'header-is-login',
  methods: {
    ...mapActions(['system/setLoginFlag']),
    setLoginFlag(flag) {
      this['system/setLoginFlag'](flag)
    },
  },
   computed: {
    ...mapState({
      displayName: (state) => state.system.displayName, //显示名
    }),
  },
}
</script>

<style lang="scss" scoped>
.rounded-circle {
  position: absolute;
  top: -5px;
  right: -5px;
}
</style>
