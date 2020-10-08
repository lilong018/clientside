<template>
  <div class="bg bg-city">
    <div class="home content-padding">
      <div class="huge-panel">
        <h2 class="title">有票么 供应链票据金融资讯平台</h2>
        <h4 clsss="description">即实交易-快速打款</h4>
        <br />
        <br />
        <br />

        <b-container fluid>
          <b-row>
            <b-col>
              <router-link to="/welcome">
                <img class="ico-home" src="@/assets/images/ico-home01.png" />
                <b-button variant="primary" class="btn-width-lg ml-2">市场交易</b-button>
              </router-link>
            </b-col>
            <b-col>
              <router-link to="/welcome">
                <img class="ico-home" src="@/assets/images/ico-home02.png" />
                <b-button variant="primary" class="btn-width-lg ml-2">票据发布</b-button>
              </router-link>
            </b-col>
            <b-col>
              <router-link to="/welcome">
                <img class="ico-home" src="@/assets/images/ico-home03.png" />
                <b-button variant="primary" class="btn-width-lg ml-2">我的买卖</b-button>
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  margin: 0 auto;

  .ico-home {
    margin: 20px auto;
    display: block;
  }
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  methods: {
    ...mapActions({
      setAdminMenuFlag: (state) => state.setAdminMenuFlag, //左選單狀態
    }),
  },
  created() {
    this.setAdminMenuFlag(true) //左選單狀態-打開
  },
}
</script>