<template>
  <div class="bg bg-money">
    <div class="login content-padding">
      <div class="panel-simple">
        <img class="logo" src="@/assets/images/logo-login.png" />
        <div class="form-group mt-2">
          <br />
          <b-form-input v-model="formData.username" placeholder="用户名"></b-form-input>
          <b-form-input v-model="formData.password" placeholder="密码" type="password"></b-form-input>
          <b-button-group class="d-flex">
            <b-form-input v-model="formData.captcha" placeholder="验证码"></b-form-input>
            <div class="mx-3">XJKS49</div>
          </b-button-group>
        </div>
        <div class="form-group mt-2">
          <router-link to="/home">
            <b-button variant="primary" class="w-100" @click="login()">登录</b-button>
          </router-link>
          <router-link to="/register">
            <b-button variant="outline-secondary" class="w-100">免费注册新帐号</b-button>
          </router-link>
          <router-link to="/forgetPassword">忘记登录密码？</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login {
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
  // name: 'welcome',
  data() {
    return {
      formData: {
        username: null,
        password: null,
        captcha: null,
      },
    }
  },
  methods: {
    ...mapActions({
      setAdminMenuFlag: (state) => state.setAdminMenuFlag, //左選單狀態
    }),
    ...mapActions(['system/setToken','system/setUserId','system/setLoginFlag','system/setDisplayName','system/setPlatformId']),
    setToken(token){
      this['system/setToken'](token)
    },
    setUserId(userId){
      this['system/setUserId'](userId)
    },
    setLoginFlag(flag) {
      this['system/setLoginFlag'](flag)
    },
    setDisplayName(displayName) {
      this['system/setDisplayName'](displayName)
    },
    setPlatformId(platformId) {
      this['system/setPlatformId'](platformId)
    },
    login() {
      let url = '/api/sys/login'
      let params = this.formData
      // let headers = {"x-auth-token":""};
      this.$post(url, params).then((res) => {
        console.log(res)
        if (res.code === 0) {
          // this.$store.commit('setToken',res.result.token);
          this.setToken(res.result.token);
          this.setUserId(res.result.currentUser.id);
          this.setLoginFlag(true);
          this.setDisplayName(res.result.currentUser.displayName);
          this.setPlatformId(res.result.currentUser.platformId);
          // console.log(sessionStorage.getItem("token"));
          // this.$router.push('/home')
        } else {
          console.log("fail")
          console.log(res)
          this.$message.error(res.msg)
          this.refreshCode()
        }
      })
      // this.axios({
      //   method: 'post',
      //   // baseURL: '/api/sys/login',
      //   url: '/api/sys/login',
      //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      //   data: this.qs.stringify(this.formData),
      // })
      //   .then((res) => {
      //     console.log(res)
      //     this.apiData = res.data
      //   })
      //   .catch((err) => {
      //     console.log(err.data.msg)
      //     this.apiData.msg = err.data.msg
      //     this.apiData.code = err.data.code
      //   })
    },
  },
  created() {
    this.setAdminMenuFlag(true) //左選單狀態-打開
  },
}
</script>
