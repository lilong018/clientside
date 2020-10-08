<template>
  <div class="bg bg-money-dark p-3">
    <div class="card mb-3">
      <div class="card-body container py-5">
        <div class="card-title card-text text-center">电子交易账户开通</div>

        <!--(1)Step过程-账户激活-->
        <div class="steps-box">
          <ul class="steps">
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">1</span>
                <span class="step-text">账户开通</span>
              </div>
            </li>
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">2</span>
                <span class="step-text">资料审核</span>
              </div>
            </li>
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">3</span>
                <span class="step-text">账户激活</span>
              </div>
            </li>
            <li class="step">
              <div class="step-content">
                <span class="step-circle">4</span>
                <span class="step-text">完成开户</span>
              </div>
            </li>
          </ul>
        </div>

        <!--银行账户激活-->
        <article class="mb-3">
          <h2 class="form-title">银行账户激活</h2>

          <div class="d-flex flex-column flex-lg-row p-3 mx-auto" style="max-width: 760px">
            <div class="mr-4">
              <b-form-group>
                <label>企业名称</label>
                <b-form-input disabled required placeholder="企业名称"></b-form-input>
              </b-form-group>

              <b-form-group>
                <label>银行行号</label>
                <b-form-input disabled required placeholder="银行行号"></b-form-input>
              </b-form-group>

              <b-form-group>
                <label>银行名称</label>
                <b-form-input disabled required placeholder="银行名称"></b-form-input>
              </b-form-group>

              <b-form-group>
                <label>银行账号</label>
                <b-form-input disabled required placeholder="银行账号"></b-form-input>
              </b-form-group>

              <b-form-group>
                <label>账户验证</label>
                <b-form-input required placeholder="金额"></b-form-input>
              </b-form-group>
            </div>
            <div>
              <div class="friendly-reminder">
                <div class="friendly-reminder__title">
                  <i class="solid-line"></i>
                  <span>温馨提示</span>
                  <i class="solid-line"></i>
                </div>
                <ul>
                  <li>
                    <i class="fas fa-info-circle mr-1"></i>
                    对公银行一旦联系成功，后期无法更改，请谨慎选择常用账户。
                  </li>
                  <li>
                    <i class="fas fa-info-circle mr-1"></i>
                    若您注册的是【买方&买方】，必须联系【平安银行，中心银行对公账户】
                  </li>
                </ul>
              </div>

              <div class="border border-danger px-2 text-danger d-inline-block">
                剩余验证次数：
                <span class="fa-3x">3</span>
                次
              </div>
            </div>
          </div>
        </article>

        <div class="d-flex justify-content-center">
          <router-link to="/account/payment/add/done"><b-button variant="primary" class="btn-lg">立即注册</b-button></router-link>
          <b-button variant="primary" class="btn-lg" v-b-modal.activationError>立即注册(失败)</b-button>
        </div>

        <!--跳弹视窗-验证失败-->
        <b-modal id="activationError" title="验证失败" ok-only ok-title="确认" no-close-on-esc no-close-on-backdrop hide-header-close>
          <p>账户激活失败3次，请重新绑定银行账户</p>
          <p>验证失败: 验证金额错误</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'paymentAddStep3',
  data() {
    return {}
  },
  mounted() {
    const vm = this

    //显示手机检查
    this.$bvModal.show('modalMobileCheck')
  },
}
</script>
