<template>
  <div class="bg bg-money">
    <div class="welcome content-padding">
      <div class="huge-panel">
        <h2 class="title">有票么 供应链票据金融资讯平台</h2>
        <h4 clsss="description">即实交易-快速打款</h4>
        <br />
        <br />
        <br />
        <b-button-group size="sm">
          <router-link to="/login">
            <b-button variant="primary" class="btn-width-lg mr-2">登录</b-button>
          </router-link>
          <router-link to="/register">
            <b-button variant="outline-secondary" class="btn-width-lg ml-2">注册</b-button>
          </router-link>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.welcome {
  margin: 0 auto;
}
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'welcome',
  methods: {
    ...mapActions({
      setAdminMenuFlag: (state) => state.setAdminMenuFlag, //左選單狀態
    }),
  },
  computed: {
    ...mapState(['adminMenuFlag', 'bgMoneyFlag', 'bgCityFlag']),
  },
  created() {
    this.setAdminMenuFlag(true) //左選單狀態-打開
  },
}
</script>