<template>
  <div class="bg bg-money">
    <div class="forgetPassword content-padding">
      <div class="panel-simple">
        <h2 class="title">重置密码</h2>
        <div class="form-group mt-5">
          <div class="row">
            <label class="col-4">手机号</label>
            <span class="col-8">+86 12345678901</span>
          </div>
          <br />
          <div class="col-12">
            <div class="row">
              <b-form-input class="col mr-1" v-model="accountValidationCode" placeholder="验证码"></b-form-input>
              <div class="col ml-1 text-center">XJKS49</div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <b-form-input v-model="mobileValidationCode" placeholder="手机验证码(6码)" class="col mr-1"></b-form-input>
              <b-button variant="outline-secondary" class="col ml-1">获取验证码</b-button>
            </div>
          </div>
          <b-form-input type="password" v-model="newPassword" placeholder="新密码"></b-form-input>
          <b-form-input type="password" v-model="newPasswordConfirm" placeholder="确认新密码"></b-form-input>
        </div>
        <div class="form-group mt-2">
          <b-button variant="primary" v-b-modal.layer class="w-100">确认</b-button>
          <!--跳弹视窗-《同意有票么注册协议》-->
          <b-modal id="layer" title="重置密码" ok-only ok-title="返回登入" @ok="gotoPage('login')">
            <p class="my-4">重置密码成功</p>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.forgetPassword {
  margin: 0 auto;

  .logo {
    display: block;
    margin: 0 auto;
  }
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'forgetPassword',
  data() {
    return {
      accountValidationCode: null,
      mobileValidationCode: null,
      newPassword: null,
      newPasswordConfirm: null,
    }
  },
  methods: {
    //去path頁面
    gotoPage: function (path) {
      this.$router.push(path)
    },
    ...mapActions({
      setAdminMenuFlag: (state) => state.setAdminMenuFlag, //左選單狀態
    }),
  },
  created() {
    this.setAdminMenuFlag(true) //左選單狀態-打開
  },
}
</script>