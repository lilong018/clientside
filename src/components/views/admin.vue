<template>
  <div class="admin d-flex flex-column">
    <!--router-->
    <router-view name="appAdmin"></router-view>

    <!--工具按钮勿删除-->

    <DraggableDiv v-if="toolbar" class="card p-1" style="width: 200px; right: 0; cursor: pointer">
      <template slot="header">
        测试选单 可以拖曳
        <b-button class="bg-white float-right" @click="toolbar = !toolbar" size="sm">X</b-button>
      </template>
      <template slot="main">
        <div class="row no-gutters clearfix">
          <div class="col-6 pr-1 pb-1">
            <b-button size="sm" class="btn-block" @click="setAdminMenuFlag(true)">有左选单</b-button>
          </div>
          <div class="col-6 pr-1 pb-1">
            <b-button size="sm" class="btn-block" @click="setAdminMenuFlag(false)">无左选单</b-button>
          </div>
          <div class="col-6 pr-1 pb-1">
            <b-button size="sm" class="btn-block" @click="setLoginFlag(true)">有login</b-button>
          </div>
          <div class="col-6 pr-1 pb-1">
            <b-button size="sm" class="btn-block" @click="setLoginFlag(false)">无login</b-button>
          </div>
          <div class="clearfix">
            <router-link to="/account">帐户页面</router-link>
            <br />
            <router-link to="/account/payment/add">開通</router-link>
            <br />
            <router-link to="/account/payment/add/activation">開通3(账户激活)</router-link>
            <br />
            <router-link to="/account/bank/">銀行</router-link>
            <br />
            <router-link to="/account/enterprise/message">企業訊息</router-link>
          </div>
        </div>
      </template>
    </DraggableDiv>
  </div>
</template>

<style lang="scss">
.admin {
  width: 100%;
  height: inherit;
}
</style>

<script>
import Welcome from '@/components/views/welcome.vue'
import DraggableDiv from '@/components/layout/DraggableDiv'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'admin',
  data() {
    return {
      toolbar: true,
    }
  },
  components: {
    Welcome,
    DraggableDiv,
  },
  methods: {
    ...mapActions(['system/setLoginFlag', 'system/setAdminMenuFlag']),
    setAdminMenuFlag(flag) {
      this['system/setAdminMenuFlag'](flag)
    },
    setLoginFlag(flag) {
      this['system/setLoginFlag'](flag)
    },
  },
  mounted: function () {
    // this.$router.push('/welcome') //进入登入/注册页面
  },
}
</script>
