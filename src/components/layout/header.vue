<template>
  <header class="app-header">
    <b-container>
      <div class="app-header__logo">
        <router-link to="/">
          <img class="m-2" src="@/assets/images/logo.png" />
        </router-link>
      </div>

      <ul class="app-header__nav">
        <li>
          <router-link to="/welcome">首页</router-link>
        </li>
        <li>
          <router-link to="/transaction">交易市场</router-link>
        </li>
        <li>
          <router-link to="/bill">票据发布</router-link>
        </li>
        <li>
          <router-link to="/myOrder">我的买卖</router-link>
        </li>
      </ul>

      <!--loginFlag變數管理有沒有登入-->

      <div class="app-header__loginFlag">
        <header-is-login v-if="loginFlag" />
        <header-not-login v-if="!loginFlag" />
      </div>
    </b-container>
  </header>
</template>

<style lang="scss">
.app-header {
  background: #212121;
  display: flex;
  width: 100vw;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.app-header__nav {
  flex: auto;
  margin: unset;

  li {
    display: inline-flex;
    padding: 0 20px;
    cursor: pointer;

    a {
      color: $gold-dark;
    }

    a:hover {
      color: $gold;
      text-decoration: none;
    }
  }
}
.app-header__loginFlag {
  display: flex;
  flex: auto;
  .app-header__login {
    &.is-login {
      text-align: right;
      flex-basis: 350px;
    }

    &.not-login {
      flex-basis: 140px;
    }
  }
}
// Small devices sm
@media (max-width: 767.98px) {
  .app-header {
    padding: 10px 0 15px;
  }
  .app-header .container {
    flex-direction: column;
  }
  .app-header__logo {
    flex-basis: 50px;
  }
  .app-header__loginFlag {
    margin-top: 0.5rem;
  }
  .app-header__nav {
    margin: 10px 0;
  }
  .app-header__nav li {
    padding: 0 10px;
  }
}
</style>

<script>
import { mapState } from 'vuex'
import HeaderIsLogin from '@/components/layout/headerIsLogin'
import HeaderNotLogin from '@/components/layout/headerNotLogin'

export default {
  name: 'app-header',
  components: {
    HeaderIsLogin,
    HeaderNotLogin,
  },
  computed: {
    ...mapState({
      loginFlag: (state) => state.system.loginFlag, //登入狀態
    }),
  },
}
</script>
