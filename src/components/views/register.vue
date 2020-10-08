<template>
  <div class="bg bg-money">
    <div class="register content-padding">
      <div class="panel-simple">
        <h2 class="title">注册会员</h2>
        <router-link to="/login">
          <a>已经有帐号? 立即登录</a>
        </router-link>
        <b-form-group class="mt-2">
          <br />
          <b-form-input v-model="mobile" placeholder="帐号-输入手机号" required></b-form-input>
          <!-- <b-form-input v-model="mobile" placeholder="帐号-输入手机号" class="is-invalid" required></b-form-input>
          <div class="error-message">该手机号已经注册</div> -->
          <div class="col-12">
            <div class="row">
              <b-form-input class="col mr-1" v-model="captcha" placeholder="验证码"></b-form-input>
              <div class="col ml-1 text-center">
                <img  class="pointer" :src="imgHtml" @click="refreshCode" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="javascript:;" @click="refreshCode">点击刷新</a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <b-form-input v-model="code" placeholder="手机验证码(6码)" class="col mr-1"></b-form-input>
              <b-button variant="outline-secondary" class="col ml-1" @click="getMobileCode">获取验证码</b-button>
            </div>
          </div>
          <b-form-input v-model="password" placeholder="登录密码"></b-form-input>
          <b-form-input v-model="passwordconfirm" placeholder="确认密码"></b-form-input>
          <b-form-input v-model="refereeId" placeholder="营销代码"></b-form-input>
        </b-form-group>
        <b-input-group class="mb-3">
          <b-form-checkbox id="checkbox" v-model="status" name="checkbox" value="accepted" unchecked-value="not_accepted"></b-form-checkbox>
          <label name="checkbox">我已阅读</label>
          <b-link href="#" v-b-modal.regisgterAgreement>《同意有票么注册协议》</b-link>

          <!--跳弹视窗-《同意有票么注册协议》modal ok-only只會顯示ok ok-title改字-->
          <b-modal id="regisgterAgreement" title="《同意有票么注册协议》" ok-only ok-title="确认">
            <p class="my-4">《同意有票么注册协议》內容.....</p>
          </b-modal>
        </b-input-group>

        <router-link class="text-description-none" to="/registerSuccess">
          <b-button v-b-modal.regisgterCommit variant="primary" class="w-100" @click="register">完成注册</b-button>
        </router-link>

        <!--跳弹视窗-《同意有票么注册协议》modal ok-only只會顯示ok ok-title改字-->
        <b-modal id="regisgterCommit" title="《同意有票么注册协议》" ok-title="确认" cancel-title="取消">
          <p class="my-4">《同意有票么注册协议》內容.....</p>
        </b-modal>

        <div class="friendly-reminder">
          <div class="friendly-reminder__title">
            <i class="solid-line"></i>
            <span>温馨提示</span>
            <i class="solid-line"></i>
          </div>
          <ul>
            <li>
              <i class="fas fa-info-circle mr-1"></i>
              请使用 IE9.0 以上浏览器
            </li>
            <li>
              <i class="fas fa-info-circle mr-1"></i>
              360或搜狗 请开启极速模式
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.register {
  margin: 0 auto;

  .logo {
    display: block;
    margin: 0 auto;
  }
  .pointer{cursor: pointer;}
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'welcome',
  data() {
    return {
      mobile: null,
      captcha: null,
      code: null,
      password: null,
      passwordconfirm: null,
      refereeId: null,
      status: null,
      imgHtml:'url',
    }
  },
  methods: {
    ...mapActions({
      setAdminMenuFlag: (state) => state.setAdminMenuFlag, //左選單狀態
    }),
    refreshCode(){
			this.imgHtml = "/api/captcha.jpg?t=" +  new Date().toLocaleString();
    },
    getMobileCode(){
      let url = '/api/code'
      console.log(this.mobile)
      let params = {"phoneNo":this.mobile,"type":1}
      this.$fetchPost(url, params).then((res) => {
        console.log(res)
        if (res.code === 0) {
          
          // this.$router.push('/home')
        } else {
          console.log("fail")
          console.log(res)
          this.$message.error(res.msg)
          this.refreshCode()
        }
      })
    },
    register(){
       let url = '/api/user/register'
       if(this.password != this.passwordconfirm){
         //提示错误信息
         return;
       }
       if(!this.regisgterAgreement){
         return;
       }
        let params = {"mobile":this.mobile,"code":this.code,"password":this.password,"refereeId":this.refereeId}
        this.$fetchPost(url, params).then((res) => {
        console.log(res)
        if (res.code === 0) {

        } else {
          console.log("fail")
          console.log(res)
          this.$message.error(res.msg)
          this.refreshCode()
        }
      })
    },
  },
  created() {
    this.setAdminMenuFlag(true) //左選單狀態-打開
    this.refreshCode()
  },
}
</script>